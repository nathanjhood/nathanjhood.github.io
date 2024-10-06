import type ReactNative = require('react-native');
import rn = require('react-native');
import logo = require('../assets/svg/logo.svg');

type LogoProps = {
  width?: number,
  height?: number,
  scale?: number,
  onLoadStart?: (() => void),
  onLoadEnd?: (() => void),
  onError?: ((error: ReactNative.NativeSyntheticEvent<ReactNative.ImageErrorEventData>) => void)
}

interface Logo {
  (): JSX.Element,
  (props?: LogoProps): JSX.Element
}

const Logo: Logo = (props?: LogoProps): JSX.Element => {

  const {
    Animated,
    Easing,
    StyleSheet
  }: typeof ReactNative = rn;

  const source: ReactNative.ImageSourcePropType = {
    uri: "data:image/svg+xml;base64," + logo
  };

  const spinValue: ReactNative.Animated.Value = new Animated.Value(0);

  // Will loop without blocking the UI thread if the child animation is set to
  // 'useNativeDriver'.
  const spinConfig = {
    toValue: 1, // from 0
    duration: 20000, // 20 seconds
    easing: Easing.linear,
    useNativeDriver: false //true
  };

  const spinTiming = Animated.timing(
    spinValue,
    spinConfig
  );

  const spin = spinValue.interpolate<string | number>({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const animation = Animated.loop(
    spinTiming
  );

  const onLoadStart: (() => void) | undefined = props && props.onLoadStart || undefined;

  const onLoadEnd: (() => void) | undefined = props && props.onLoadEnd || undefined;

  const onError: ((error: ReactNative.NativeSyntheticEvent<ReactNative.ImageErrorEventData>) => void) | undefined = props && props.onError || undefined;

  const styles = StyleSheet.create({
    logo: {
      pointerEvents: 'none',
      width: props?.width || 841.9,
      height: props?.height || 595.3,
      scale: props?.scale || 1.0,
      transform: [{ rotate: spin }]
    }
  });

  return (
    <Animated.Image
      source={source}
      style={styles.logo}
      onLoadStart={() => {
        animation.reset();
        if(props && onLoadStart) onLoadStart();
        return;
      }}
      onLoadEnd={() => {
        animation.start();
        if(props && onLoadEnd) onLoadEnd();
        return;
      }}
      onError={(error) => {
        animation.stop();
        if (props && onError) onError(error)
        return;
      }}
    />
  )

}

export = Logo;
