import type React = require('react');
import type ReactNative = require('react-native');
// import rc = require('react');
import rn = require('react-native');
import logo = require('./logo.svg');

type LogoProps = React.PropsWithChildren<{
  width?: number,
  height?: number,
  onLoadStart?: (() => void),
  onLoadEnd?: (() => void),
  onError?: ((error: ReactNative.NativeSyntheticEvent<ReactNative.ImageErrorEventData>) => void)
}>

interface Logo {
  (): React.JSX.Element,
  (props?: LogoProps): React.JSX.Element
}

const Logo: Logo = (props?: LogoProps) => {

  // const { useState, useEffect }: typeof React = rc;

  const {
    Animated,
    Easing,
    // Image,
    useWindowDimensions
  }: typeof ReactNative = rn;

  const source: ReactNative.ImageSourcePropType = {
    uri: "data:image/svg+xml;base64," + logo
  }

  const { width, height } = useWindowDimensions()

  const spinValue = new Animated.Value(0);

  const spinTiming = Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 20000, // 20 seconds
        easing: Easing.linear, // Easing is an additional import from react-native
        useNativeDriver: false // true  // To make use of native driver for performance
      }
    )

  // First set up animation
  const animation = Animated.loop(spinTiming)

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  const onLoadStart: (() => void) | undefined = props && props.onLoadStart !== undefined
      ? props.onLoadStart
    : undefined;

  const onLoadEnd: (() => void) | undefined = props && props.onLoadEnd !== undefined
      ? props.onLoadEnd
    : undefined;

  const onError: ((error: ReactNative.NativeSyntheticEvent<ReactNative.ImageErrorEventData>) => void) | undefined =
    props && props.onError !== undefined
      ? props.onError
    : undefined;

  return (
    <Animated.Image
      source={source}
      style={[
        {
          pointerEvents: 'none',
          width: (width * 0.5), // 841.9,
          height: (height * 0.5) //595.3,
        }, {
          transform: [{ rotate: spin }]
        }]}
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

export = Logo
