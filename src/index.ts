/* eslint-disable @typescript-eslint/no-explicit-any */
import React = require('react');
// import ReactDom = require('react-dom');
// import type ReactNative = require('react-native');
import rn = require('react-native');
import App = require('./App');
import AppJson = require('../app.json');
import serviceWorker = require('./serviceWorker');

interface index {
  (app: React.ComponentType<any>): void;
  (app: React.ComponentType<any>, useSwr: true | false): void;
}

const index: index = (
  app: React.ComponentType<any>,
  useSwr: true | false = false
): void => {
  //
  const { AppRegistry } = rn;
  const { name: appName } = AppJson;
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers:
  // https://create-react-app.dev/docs/making-a-progressive-web-app
  if (useSwr) {
    serviceWorker.register({
      onSuccess: (registration) => {
        if (registration.installing) {
          console.log('Service worker installing');
        } else if (registration.waiting) {
          console.log('Service worker installed');
        } else if (registration.active) {
          console.log('Service worker active');
        }
      },
      onUpdate: (registration) => {
        if (registration.installing) {
          console.log('Service worker installing');
        } else if (registration.waiting) {
          console.log('Service worker installed');
        } else if (registration.active) {
          console.log('Service worker active');
        }
      },
    });
  } else {
    serviceWorker.unregister();
  }

  AppRegistry.registerComponent(appName, () => app);

  return AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
};

export = index(App, true);
