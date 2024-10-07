import type React = require('react');
import ReactNative = require('react-native');
import va = require('@vercel/analytics/react');
import nativewind = require('nativewind');

type AnalyticsProviderProps = React.PropsWithChildren<va.AnalyticsProps>;

interface AnalyticsProvider {
  (): JSX.Element;
  (props?: AnalyticsProviderProps): JSX.Element;
}

const AnalyticsProvider: AnalyticsProvider = (
  props?: AnalyticsProviderProps
): JSX.Element => {
  const { View } = ReactNative;
  const { Analytics } = va;
  const { styled } = nativewind;
  const StyledView = styled(View);

  return (
    <StyledView>
      {props && props.children}
      {process.env.NODE_ENV === 'production' ? <Analytics /> : null}
    </StyledView>
  );
};

export = AnalyticsProvider;
