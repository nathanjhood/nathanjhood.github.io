import type React = require('react');
import type ReactNative = require('react-native');
import rc = require('react');
import rn = require('react-native');

const useAppearance = () => {
  const { useState, useEffect }: typeof React = rc;

  const {
    Appearance,
  }: typeof ReactNative = rn;

  const [scheme, setColorScheme] = useState<{
    colorScheme: ReactNative.ColorSchemeName
  }>({
    colorScheme: Appearance.getColorScheme()
  })

  const effect: React.EffectCallback = () => {
    const subscription = Appearance.addChangeListener(
      ({ colorScheme }) => {
        setColorScheme({ colorScheme });
      },
    );
    return () => subscription?.remove();
  }

  const deps: React.DependencyList = [scheme]

  useEffect(effect, deps);

  return scheme;
}
