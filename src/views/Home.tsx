// import type React = require('react');
import type ReactNative = require('react-native');
import rn = require('react-native');
import AppJson = require('../../app.json');
import Logo = require('../components/Logo');
import '../nativewind';
type HomeProps = React.PropsWithChildren<{
  dimensions?: ReactNative.ScaledSize
}>

interface Home {
  (props?: HomeProps): JSX.Element
}

const Home = (props?: HomeProps): JSX.Element => {

  const {
    StyleSheet,
    Text,
    View,
    useWindowDimensions
  } = rn;

  const dimensions = props?.dimensions || useWindowDimensions();

  const { scale } = dimensions;

  const styles = StyleSheet.create<
    {
    container: ReactNative.ViewStyle,
    header: ReactNative.ViewStyle,
    code: ReactNative.TextStyle,
    p: ReactNative.TextStyle,
    link: ReactNative.TextStyle,
  }>(
    {
    container: {
      color: 'white',
      backgroundColor: '#282c34',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      minHeight: '100vh',
      fontSize: '10px + 2vmin',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
    <View style={styles.container}>

      <View style={{ height: 12 }} />

      <Text style={styles.p}>
        Welcome to {AppJson.displayName}
      </Text>

      <Logo

        width={841.9 * scale}
        height={595.3 * scale}
      />
      <View style={styles.header}>

        <Text style={styles.p}>
          <Text style={styles.code}>Under construction...</Text>
        </Text>

        <View style={{ height: 12 }} />

        <Text
          style={styles.link}
          href="https://github.com/nathanjhood/esbuild-scripts"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Powered by React Native with esbuild and Typescript
        </Text>
      </View>
    </View>
  )
}

export = Home;
