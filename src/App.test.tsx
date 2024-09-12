import * as React from 'react';
import { test, expect, describe, it, afterEach } from '@jest/globals';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

const timeout = 10000;

afterEach(() => {
  cleanup();
}, timeout);

describe('App', () => {
  it(
    'renders successfully',
    () => {
      test('render (strict)', () => {
        render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
        const linkElement = screen.getByText(/Welcome to React Native/i);
        expect(linkElement).toBeDefined();
      })
      test('render', () => {
        render(<App />);
        const linkElement = screen.getByText(/Welcome to React Native/i);
        expect(linkElement).toBeDefined();
      })
    },
    timeout
  );
});
