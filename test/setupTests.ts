#!/usr/bin/env -S yarn tsx

/**
 * @file setupTests.ts
 * @author Nathan J. Hood <nathanjhood@googlemail.com>
 * @copyright 2024 MIT License
 */

//
import type Test = require('node:test');
// import test = require('node:test');
import reporters = require('node:test/reporters');
import path = require('node:path');
import os = require('node:os');

type NodeTestRunnerParameters = Required<Parameters<typeof Test.run>>;
type NodeTestRunnerOptions = NodeTestRunnerParameters[0];

const abortController: AbortController = new AbortController();

const options: Readonly<NodeTestRunnerOptions> =
  Object.freeze<NodeTestRunnerOptions>({
    files: [
      path.resolve(path.join(__dirname, '..', 'src', 'App.test.tsx')),
      // path.resolve(path.join(__dirname, '/process/index.test.ts')),
    ],
    concurrency: os.availableParallelism() - 1,
    forceExit: false,
    only: false,
    timeout: Infinity,
    signal: abortController.signal,
    setup(testsStream) {
      // Log test failures to console
      testsStream.on('test:fail', (testFail) => {
        console.error(testFail);
        process.exitCode = 1; // must be != 0, to avoid false positives in CI pipelines
      });
      // coverage reporter
      const isTTY = process.stdout.isTTY;
      const reporter = isTTY ? reporters.spec : reporters.tap;
      testsStream.compose(reporter).pipe(process.stdout);
    },
    // testNamePatterns: [
    //   "**/*.test.?(c|m)js",
    //   "**/*-test.?(c|m)js",
    //   "**/*_test.?(c|m)js",
    //   "**/test-*.?(c|m)js",
    //   "**/test.?(c|m)js",
    //   "**/test/**/*.?(c|m)js"
    // ],
  });

export = options;
