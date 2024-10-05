import type React = require('react');
import type ReactNative = require('react-native');
import rn = require('react-native');

import Logo = require('../components/Logo');

type HomeProps = React.PropsWithChildren<{}>

interface Home {
  (props?: HomeProps): React.JSX.Element
}

const Home = (props?: HomeProps): React.JSX.Element => {

  const {
    StyleSheet,
    Text,
    View,
  } = rn;

  const styles: {
    header: ReactNative.ViewStyle;
    code: ReactNative.TextStyle;
    p: ReactNative.TextStyle;
    link: ReactNative.TextStyle;
} = StyleSheet.create<
  {
    header: ReactNative.ViewStyle,
    code: ReactNative.TextStyle,
    p: ReactNative.TextStyle,
    link: ReactNative.TextStyle,
  }>(
  {
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
    <View style={{
      color: 'white',
      backgroundColor: '#282c34',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Logo />
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
