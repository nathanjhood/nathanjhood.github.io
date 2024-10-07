import type ReactNative = require('react-native');
import rn = require('react-native');
import AnalyticsProvider = require('./providers/analytics');
import Home = require('./views/Home');
import './assets/css/tailwind.css'; // <- to create 'main.css'
// import './assets/css/main.css'; // <- to create 'nativewind.js'
import './NativeWindStyles';
import nativewind = require('nativewind');

interface App {
  (): JSX.Element;
}
const App: App = (): React.JSX.Element => {
  const {
    StyleSheet,
    Pressable,
    ScrollView,
    Text,
    useWindowDimensions,
  }: typeof ReactNative = rn;

  const { useColorScheme, styled } = nativewind;

  const { colorScheme, setColorScheme } = useColorScheme();

  const StyledScrollView = styled(ScrollView);
  const StyledText = styled(Text);

  const { width, height, scale }: ReactNative.ScaledSize =
    useWindowDimensions();

  const styles = StyleSheet.create({
    app: {
      width: width,
      height: height,
      scale: scale,
      textAlign: 'center',
    },
  });

  return (
    <StyledScrollView style={[styles.app, StyleSheet.absoluteFill]}>
      <AnalyticsProvider>
        <Home />
        <Pressable
          onPress={() =>
            setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
          }
          onClick={() =>
            setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
          }
        >
          <StyledText>{`The color scheme is ${colorScheme}`}</StyledText>
        </Pressable>
      </AnalyticsProvider>
    </StyledScrollView>
  ) satisfies JSX.Element;
};

export = App;
