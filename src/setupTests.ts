import '@testing-library/jest-dom';
import { beforeEach, beforeAll, afterEach, afterAll } from '@jest/globals';
import { cleanup } from '@testing-library/react';

afterAll(() => {
  cleanup();
});
