/* eslint-disable @typescript-eslint/no-require-imports */



// Get the https config
// Return cert files if provided in env, otherwise just true or false
function getHttpsConfig(process: NodeJS.Process) {
  //
  const { env } = process;
  //
  const { SSL_CRT_FILE, SSL_KEY_FILE, HTTPS } = env;
  //
  const isHttps = HTTPS === 'true';
  //
  const setupPaths: typeof import('./paths').default = require('./paths').default;
  const paths = setupPaths(process);
  //
  const path: typeof import('path') = require('path');
  // Ensure the certificate and key provided are valid and if not
  // throw an easy to debug error
  function validateKeyAndCerts({ cert, key, keyFile, crtFile }) {
    //
    const _crypto: typeof import('crypto') = require('crypto');
    const chalk: typeof import('react-dev-utils/chalk') = require('react-dev-utils/chalk');
    //
    let encrypted;
    //
    try {
      // publicEncrypt will throw an error with an invalid cert
      encrypted = _crypto.publicEncrypt(cert, Buffer.from('test'));
    } catch (err) {
      throw new Error(
        `The certificate "${chalk.yellow(crtFile)}" is invalid.\n${err.message}`
      );
    }
    //
    try {
      // privateDecrypt will throw an error with an invalid key
      _crypto.privateDecrypt(key, encrypted);
    } catch (err) {
      throw new Error(
        `The certificate key "${chalk.yellow(keyFile)}" is invalid.\n${
          err.message
        }`
      );
    }
  }

  // Read file and throw an error if it doesn't exist
  function readEnvFile(file: string, type: keyof NodeJS.ProcessEnv) {
    //
    const fs: typeof import('fs') = require('fs');
    const chalk: typeof import('react-dev-utils/chalk') = require('react-dev-utils/chalk');
    //
    if (!fs.existsSync(file)) {
      throw new Error(
        `You specified ${chalk.cyan(
          type
        )} in your env, but the file "${chalk.yellow(file)}" can't be found.`
      );
    }
    return fs.readFileSync(file);
  }
  //
  if (isHttps && SSL_CRT_FILE && SSL_KEY_FILE) {
    const crtFile = path.resolve(paths.appPath, SSL_CRT_FILE);
    const keyFile = path.resolve(paths.appPath, SSL_KEY_FILE);
    const config = {
      cert: readEnvFile(crtFile, 'SSL_CRT_FILE'),
      key: readEnvFile(keyFile, 'SSL_KEY_FILE'),
    };

    validateKeyAndCerts({ ...config, keyFile, crtFile });
    return config;
  }
  return isHttps;
}

export default getHttpsConfig;
