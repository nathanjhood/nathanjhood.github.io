import type React = require('react');
import ReactNative = require('react-native');
import va = require('@vercel/analytics/react');

type AnalyticsProviderProps = React.PropsWithChildren<va.AnalyticsProps>

interface AnalyticsProvider {
  (): JSX.Element
  (props?: AnalyticsProviderProps): JSX.Element
}

const AnalyticsProvider: AnalyticsProvider = (
  props?: AnalyticsProviderProps
): JSX.Element => {

  const { View } = ReactNative;
  const { Analytics } = va;

  return (
    <View>
      {props && props.children}
      {process.env.NODE_ENV === 'production' ? (
          <Analytics />
        ) : null
      }
    </View>
  )
}

export = AnalyticsProvider;
