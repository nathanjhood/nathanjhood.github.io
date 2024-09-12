#!/usr/bin/env -S yarn tsx
/* eslint-disable @typescript-eslint/no-require-imports */

const setupEnv = (process: NodeJS.Process) => {
  //
  process.on('unhandledRejection', (error) => {
    throw error;
  })
  process.on('uncaughtException', (error) => {
    throw error;
  })
  //
  const fs: typeof import("node:fs") = require("node:fs");
  const path: typeof import("node:path") = require("node:path");
  const dotenv: typeof import("dotenv") = require("dotenv");
  const dotenvExpand : typeof import("dotenv-expand").expand = require("dotenv-expand").expand;
  const setupPaths: typeof import("./paths").default = require("./paths").default;
  // Make sure that including paths.js after env.js will read .env variables.
  delete require.cache[require.resolve("./paths")];
  //
  const paths = setupPaths(process)
  //
  const { env, cwd: getCwd } = process;
  //
  const cwd = getCwd();
  //
  const { NODE_ENV, FAST_REFRESH, WDS_SOCKET_PORT, WDS_SOCKET_PATH, WDS_SOCKET_HOST, HTTPS, PORT, HOST } = env;
  //
  if (!NODE_ENV) {
    throw new Error(
      "The NODE_ENV environment variable is required but was not specified."
    );
  }

  // https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
  const dotenvFiles = [
    `${paths.dotenv}.${NODE_ENV}.local`,
    // // Don't include `.env.local` for `test` environment
    // // since normally you expect tests to produce the same
    // // results for everyone
    // NODE_ENV !== "test" && `${paths.dotenv}.local`,
    `${paths.dotenv}.${NODE_ENV}`,
    paths.dotenv,
  ].filter(Boolean);
  // Load environment variables from .env* files. Suppress warnings using silent
  // if this file is missing. dotenv will never modify any environment variables
  // that have already been set.  Variable expansion is supported in .env files.
  // https://github.com/motdotla/dotenv
  // https://github.com/motdotla/dotenv-expand
  dotenvFiles.forEach((dotenvFile) => {
    if (fs.existsSync(dotenvFile.toString())) {
      dotenvExpand(
        dotenv.config({
          path: dotenvFile,
        })
      );
    }
  });
  // We support resolving modules according to `NODE_PATH`.
  // This lets you use absolute paths in imports inside large monorepos:
  // https://github.com/facebook/create-react-app/issues/253.
  const appDirectory = fs.realpathSync(cwd);
  // It works similar to `NODE_PATH` in Node itself:
  // https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders
  // Note that unlike in Node, only *relative* paths from `NODE_PATH` are honored.
  // Otherwise, we risk importing Node.js core modules into an app instead of webpack shims.
  // https://github.com/facebook/create-react-app/issues/1023#issuecomment-265344421
  // We also resolve them to make sure all tools using them work consistently.
  process.env['NODE_PATH'] = (process.env['NODE_PATH'] || "") // use the *actual* process, *not* a copy
    .split(path.delimiter)
    .filter((folder) => folder && !path.isAbsolute(folder))
    .map((folder) => path.resolve(appDirectory, folder))
    .join(path.delimiter);

  // Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
  // injected into the application via DefinePlugin in webpack configuration.
  const REACT_APP = /^REACT_APP_/i;
  //
  function getClientEnvironment(publicUrl: any) {
    const raw: {
      NODE_ENV: "development" | "production" | "test";
      PUBLIC_URL: any;
      WDS_SOCKET_HOST: string | undefined;
      WDS_SOCKET_PATH: string | undefined;
      WDS_SOCKET_PORT: string | undefined;
      FAST_REFRESH: boolean;
      // HTTPS: boolean;
      // "HOST": string;
      // PORT: number;
    } = Object.keys(env)
      .filter((_key) => REACT_APP.test(_key))
      .reduce(
        (_env, _key) => {
          const __key = _key as keyof typeof _env;
          _env[__key] = env[__key];
          return _env;
        },
        {
          // Useful for determining whether we’re running in production mode.
          // Most importantly, it switches React into the correct mode.
          NODE_ENV: NODE_ENV || "development",
          // Useful for resolving the correct path to static assets in `public`.
          // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
          // This should only be used as an escape hatch. Normally you would put
          // images into the `src` and `import` them in code to get their paths.
          PUBLIC_URL: publicUrl,
          // We support configuring the sockjs pathname during development.
          // These settings let a developer run multiple simultaneous projects.
          // They are used as the connection `hostname`, `pathname` and `port`
          // in webpackHotDevClient. They are used as the `sockHost`, `sockPath`
          // and `sockPort` options in webpack-dev-server.
          WDS_SOCKET_HOST: WDS_SOCKET_HOST,
          WDS_SOCKET_PATH: WDS_SOCKET_PATH,
          WDS_SOCKET_PORT: WDS_SOCKET_PORT,
          // Whether or not react-refresh is enabled.
          // It is defined here so it is available in the webpackHotDevClient.
          FAST_REFRESH: FAST_REFRESH !== "false",
          // // custom
          // HTTPS: HTTPS !== "false",
          // HOST: HOST ? HOST : "0.0.0.0",
          // PORT: PORT ? parseInt(PORT) : 3000
        }
      );
    // Stringify all values so we can feed into esbuild defines
    const stringified: {
      "process.env": {};
    } = {
      "process.env": Object.keys(raw).reduce((_env, _key) => {
        // _env[_key] = JSON.stringify(raw[_key]);
        return _env;
      }, {}),
    };

    return { raw, stringified };
  };
  return getClientEnvironment;
}

if (require.main === module) {
  const getClientEnvironment = setupEnv(process);
  const { raw, stringified } = getClientEnvironment(process.env['PUBLIC_URL']);
  console.info(raw);
}

const env = setupEnv;

export default env;
