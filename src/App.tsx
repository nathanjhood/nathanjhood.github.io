// import type React from 'react';
import type ReactNative = require('react-native');
import rn = require('react-native');
import AnalyticsProvider = require('./providers/analytics');
import Home = require('./components/Home')

type AppProps = React.PropsWithChildren<{
  verbose?: true | false;
}>

interface App {
  (): JSX.Element
  (props?: AppProps): JSX.Element
}
const App: App = (props?: AppProps): JSX.Element => {

  const {
    StyleSheet,
    View,
    useWindowDimensions,
  } = rn;

  const { width, height, scale } = useWindowDimensions();

  const styles: {
    app: ReactNative.ViewStyle;
} = StyleSheet.create<
  {
    app: ReactNative.ViewStyle,
  }>(
  {
    app: {
      textAlign: 'center',
    }
  });

  return (
    <View style={[
      styles.app,
      {
        width: width,
        height: height,
        scale: scale
      },
      StyleSheet.absoluteFill
    ]}>
      <AnalyticsProvider>
        <Home />
      </AnalyticsProvider>
    </View>
  ) satisfies JSX.Element
}

export = App;
