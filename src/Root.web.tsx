/**
 * This file is web-only and used to configure the root HTML for every web page
 * during static rendering.
 */

//
import type React = require('react')

type RootProps = React.PropsWithChildren<{
  useScrollViewStyleReset?: true | false;
}>

interface Root {
  (props: RootProps): React.JSX.Element
}

/**
 * The contents of this function only run in Node.js environments and do not
 * have access to the DOM or browser APIs.
 *
 * @param {RootProps} props see {@link RootProps}
 * @returns {React.JSX.Element}
 */
const Root: Root = (props: RootProps): React.JSX.Element => {

  /**
   * Root style-reset for full-screen React Native web apps with a root
   * `<ScrollView />` should use the following styles to ensure native parity.
   * [Learn more](https://necolas.github.io/react-native-web/docs/setup/#root-element).
   */
  const ScrollViewStyleReset: () => React.JSX.Element = (): React.JSX.Element => {
    const innerHtml: TrustedHTML = `#root,body,html{height:100%}body{overflow:hidden}#root{display:flex}`;
    return (
      <style
        id="scroll-view-style-reset"
        dangerouslySetInnerHTML={{__html: innerHtml }}
      />
    );
  }

  const responsiveBackground: TrustedHTML = `
  body {
    background-color: #fff;
  }
  @media (prefers-color-scheme: dark) {
    body {
      background-color: #000;
    }
  }`;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/*
          Disable body scrolling on web. This makes ScrollView components work
          closer to how they do on native. However, body scrolling is often nice
          to have for mobile web. If you want to enable it, remove this line.
        */}
        <ScrollViewStyleReset />

        {/*
          Using raw CSS styles as an escape-hatch to ensure the background color
          never flickers in dark-mode.
        */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        {/*
          Add any additional <head> elements that you want globally available on
          web...
        */}
      </head>
      <body>{props.children}</body>
    </html>
  );
}

export = Root;
