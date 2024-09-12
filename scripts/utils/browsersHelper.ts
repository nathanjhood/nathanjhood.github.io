/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



const setupBrowsersHelper = (process: NodeJS.Process) => {
  //
  const browserslist: typeof import('browserslist') = require('browserslist');
  const os = require('node:os');
  const pkgUp: typeof import('pkg-up') = require('pkg-up');
  const fs: typeof import('fs') = require('fs');
  //
  const defaultBrowsers = {
    production: ['>0.2%', 'not dead', 'not op_mini all'],
    development: [
      'last 1 chrome version',
      'last 1 firefox version',
      'last 1 safari version',
    ],
  };
  //
  function shouldSetBrowsers(isInteractive: boolean): Promise<{}> {
    //
      const prompts: typeof import('prompts') = require('prompts');
      const chalk: typeof import('react-dev-utils/chalk') = require('react-dev-utils/chalk');
      //
      if (!isInteractive) {
        return Promise.resolve(true);
      }

    return prompts({
      type: 'confirm',
      name: 'shouldSetBrowsers',
      message: chalk.yellow("We're unable to detect target browsers.") +
          `\n\nWould you like to add the defaults to your 'package.json'?`,
      initial: true,
    }).then((answer) => answer.shouldSetBrowsers);
  }
  //
  function checkBrowsers(dir: string, isInteractive: boolean, retry = true) {
    //
    const chalk: typeof import('react-dev-utils/chalk') = require('react-dev-utils/chalk');
    //
    const current = browserslist.loadConfig({ path: dir });
    if (current != null) {
      return Promise.resolve(current);
    }

    if (!retry) {
      return Promise.reject(
        new Error(
          chalk.red(
            'As of react-scripts >=2 you must specify targeted browsers.'
          ) +
            os.EOL +
            `Please add a ${chalk.underline(
              'browserslist'
            )} key to your ${chalk.bold('package.json')}.`
        )
      );
    }

    return shouldSetBrowsers(isInteractive).then((shouldSetBrowsers) => {
      if (!shouldSetBrowsers) {
        return checkBrowsers(dir, isInteractive, false);
      }

      return (
        pkgUp({ cwd: dir })
          .then((filePath) => {
            if (filePath == null) {
              return Promise.reject();
            }
            const pkg = JSON.parse(fs.readFileSync(filePath).toString());
            pkg['browserslist'] = defaultBrowsers;
            fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2) + os.EOL);

            browserslist.clearCaches();
            console.log();
            console.log(
              `${chalk.green('Set target browsers:')} ${chalk.cyan(
                defaultBrowsers[process.env['NODE_ENV']].join(', ')
              )}`
            );
            console.log();
          })
          // Swallow any error
          .catch(() => {})
          .then(() => checkBrowsers(dir, isInteractive, false))
      );
    });
  }
  //
  return checkBrowsers;
}

if (require.main === module) {
  const checkBrowsers = setupBrowsersHelper(process)
  checkBrowsers(__dirname, process.stdin.isTTY, false).then((result) => {
    console.info(result)
  });
}

export default setupBrowsersHelper;
