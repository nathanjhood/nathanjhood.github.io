import type React = require('react');
import type ReactNative = require('react-native');
import rn = require('react-native');
import va = require('@vercel/analytics/react');
import Logo = require('./components/Logo');

type AppProps = React.PropsWithChildren<{
  verbose?: true | false;
}>

interface App {
  (): React.JSX.Element
  (props?: AppProps): React.JSX.Element
}
const App: App = (props?: AppProps) => {

  const {
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
    useColorScheme,
  } = rn;

  const { Analytics } = va;

  const { width, height, scale, fontScale } = useWindowDimensions();
  const colorScheme = useColorScheme();

  const styles: {
    app: ReactNative.ViewStyle;
    header: ReactNative.ViewStyle;
    code: ReactNative.TextStyle;
    p: ReactNative.TextStyle;
    link: ReactNative.TextStyle;
} = StyleSheet.create<
  {
    app: ReactNative.ViewStyle,
    header: ReactNative.ViewStyle,
    code: ReactNative.TextStyle,
    p: ReactNative.TextStyle,
    link: ReactNative.TextStyle,
  }>(
  {
    app: {
      textAlign: 'center',
    },
    header: {
      color: 'white',
      backgroundColor: '#282c34',

      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px + 2vmin',
    },

    code: {
      fontFamily: 'monospace, monospace',
    },
    p: {
      color: 'white',
    },
    link: {
      color: '#61dafb',
    },
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
      <View style={styles.header}>
        <Logo />
        <Text style={styles.p}>
          Edit <Text style={styles.code}>src/App.tsx</Text> and save to reload.
        </Text>
        <Text
          style={styles.link}
          href="https://github.com/nathanjhood/ts-esbuild-react-native-web"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Powered by React Native Web esbuild and Typescript
        </Text>
      </View>
      <Analytics />
    </View>
  ) satisfies React.JSX.Element

}

export = App;
