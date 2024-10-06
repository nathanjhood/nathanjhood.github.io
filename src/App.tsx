import type ReactNative = require('react-native');
import rn = require('react-native');
import AnalyticsProvider = require('./providers/analytics');
import Home = require('./views/Home');
import './assets/css/styles.css';
import './nativewind';
import nativewind = require('nativewind');


interface App {
  (): JSX.Element
}
const App: App = (): React.JSX.Element => {

  const {
    StyleSheet,
    ScrollView,
    useWindowDimensions,
  }: typeof ReactNative = rn;

  const StyledScrollView = nativewind.styled(ScrollView)

  const { width, height, scale }: ReactNative.ScaledSize = useWindowDimensions();

  const styles = StyleSheet.create({
    app: {
      width: width,
      height: height,
      scale: scale,
      textAlign: 'center',
    }
  })

  return (
    <StyledScrollView style={[styles.app, StyleSheet.absoluteFill]}>
      <AnalyticsProvider>
        <Home />
      </AnalyticsProvider>
    </StyledScrollView>
  ) satisfies JSX.Element
}

export = App;
