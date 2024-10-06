import rn = require('react-native');

interface Spinner {
  (): JSX.Element
}

const Spinner: Spinner = (): JSX.Element => {

  const { View } = rn;

  return (
    <View className="spinner">
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  )
}

export = Spinner;
