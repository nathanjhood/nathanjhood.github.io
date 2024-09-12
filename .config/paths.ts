#!/usr/bin/env -S yarn tsx

/* eslint-disable @typescript-eslint/no-require-imports */

/**
 *
 * @param {NodeJS.Process} process
 */
const setupPaths: (process: NodeJS.Process) => {
  dotenv: string,
  appPath: string,
  appBuild: string,
  appPublic: string,
  appHtml: string,
  appIndexJs: string,
  appPackageJson: string,
  appSrc: string,
  appTsConfig: string,
  appJsConfig: string,
  yarnLockFile: string,
  testsSetup: string,
  proxySetup: string,
  appNodeModules: string,
  appWebpackCache: string,
  appTsBuildInfoFile: string,
  swSrc: string,
  publicUrlOrPath: string,
  moduleFileExtensions: string[]
} = (process: NodeJS.Process) => {
  //
  process.on('unhandledRejection', (error) => {
    throw error;
  })
  process.on('uncaughtException', (error) => {
    throw error;
  })
  //
  const path: typeof import("path") = require("path");
  const fs: typeof import("fs") = require("fs");
  const getPublicUrlOrPath: typeof import("react-dev-utils/getPublicUrlOrPath") = require("react-dev-utils/getPublicUrlOrPath");

  //
  const { cwd: getCwd, env } = process;
  //
  const { NODE_ENV, PUBLIC_URL, BUILD_DIR } = env;
  //
  const cwd = getCwd();
  //
  const appDirectory: string = fs.realpathSync(cwd);
  //
  const resolveApp: (relativePath: string) => string = (relativePath: string): string =>
    path.resolve(appDirectory, relativePath);
  //
  const publicUrlOrPath: string = getPublicUrlOrPath(
    NODE_ENV === "development",
    require(resolveApp("package.json")).homepage,
    PUBLIC_URL
  );
  //
  const buildDir: string = BUILD_DIR || "build";
  //
  const moduleFileExtensions: string[] = [
    "web.mjs",
    "mjs",
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
  ];
  //
  const resolveModule: (resolveFn: (path: string) => string, filePath: string) => string = (resolveFn: (path: string) => string, filePath: string): string => {
    //
    const extension = moduleFileExtensions.find((extension) => {
      return fs.existsSync(resolveFn(`${filePath}.${extension}`))
    });
    //
    if (extension) {
      return resolveFn(`${filePath}.${extension}`);
    }
    //
    return resolveFn(`${filePath}.js`);
  };
  //
  return {
    dotenv: resolveApp(".env"),
    appPath: resolveApp("."),
    appBuild: resolveApp(buildDir),
    appPublic: resolveApp("public"),
    appHtml: resolveApp("public/index.html"),
    appIndexJs: resolveModule(resolveApp, "src/index"),
    appPackageJson: resolveApp("package.json"),
    appSrc: resolveApp("src"),
    appTsConfig: resolveApp("tsconfig.json"),
    appJsConfig: resolveApp("jsconfig.json"),
    yarnLockFile: resolveApp("yarn.lock"),
    testsSetup: resolveModule(resolveApp, "src/setupTests"),
    proxySetup: resolveApp("src/setupProxy.js"),
    appNodeModules: resolveApp("node_modules"),
    appWebpackCache: resolveApp(".cache"),
    appTsBuildInfoFile: resolveApp(".cache/.tsbuildinfo"),
    swSrc: resolveModule(resolveApp, "src/serviceWorker"),
    publicUrlOrPath,
    moduleFileExtensions
  };
}

if (require.main === module) {
  const paths = setupPaths(process);
  console.info(paths);
}

const paths = setupPaths;

export default paths;
