import type React = require('react');
import type ReactNative = require('react-native');
import rc = require('react');
import rn = require('react-native');

const useDimensions: () => {
    window: ReactNative.ScaledSize;
    screen: ReactNative.ScaledSize;
} = () => {

  const { useState, useEffect }: typeof React = rc;

  const {
    Dimensions,
  }: typeof ReactNative = rn;

  const windowDimensions: ReactNative.ScaledSize = Dimensions.get('window');
  const screenDimensions: ReactNative.ScaledSize = Dimensions.get('screen');

  const [dimensions, setDimensions] = useState<{
    window: ReactNative.ScaledSize;
    screen: ReactNative.ScaledSize;
  }>({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });

  return dimensions;
}

export = useDimensions;
