import type React = require('react');
import type Test = require('node:test');
import type TestingLibrary = require('@testing-library/react');
import react = require('react');
import test = require('node:test');
import testingLibrary = require('@testing-library/react');
import App = require('./App');

const { describe, it, afterEach } = test;
const { cleanup, render, screen }: typeof TestingLibrary = testingLibrary;

const timeout: number = 10000;

afterEach((ctx, done) => {
  cleanup();
  done();
}, {
  timeout: timeout
});

describe('App', { timeout: timeout }, (suiteCtx: Test.SuiteContext) => {
  it(
    'renders successfully', { signal: suiteCtx.signal },
    async () => {
      //
      const result = render(
          <react.StrictMode>
            <App />
          </react.StrictMode>
      );
      //
      const message: RegExp = /Welcome to React Native/i;
      //
      (await it('render (strict)', (ctx: Test.TestContext, done) => {
        ctx.assert.ok(screen.getByText(message));
        ctx.assert.ok(result.getByText(message));
        return done();
      }));
      (await it('render', (ctx: Test.TestContext, done) => {
        ctx.assert.ok(screen.getByText(message));
        ctx.assert.ok(result.getByText(message));
        return done();
      }));
    },
  );
});
