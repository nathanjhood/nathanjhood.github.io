#!/usr/bin/env -S yarn tsx

/* eslint-disable @typescript-eslint/no-require-imports */

import * as EsBuild from 'esbuild';

const setupConfig = (process: NodeJS.Process) => {
  //
  process.on('unhandledRejection', (error) => {
    throw error;
  })
  process.on('uncaughtException', (error) => {
    throw error;
  })
  //
  const fs: typeof import("fs") = require("fs");
  const path: typeof import("path") = require("path");
  // const chalk: typeof import("chalk").default = require("react-dev-utils/chalk");
  //
  const setupPaths: typeof import("./paths").default = require("./paths").default;
  const paths = setupPaths(process);
  //
  const setupEnv: typeof import("./env").default = require("./env").default;
  const getClientEnvironment = setupEnv(process);
  //
  const { env } = process;
  //
  const {
    INLINE_RUNTIME_CHUNK,
    ESLINT_NO_DEV_ERRORS,
    DISABLE_ESLINT_PLUGIN,
    IMAGE_INLINE_SIZE_LIMIT,
    DISABLE_NEW_JSX_TRANSFORM
  } = env;
  // Some apps do not need the benefits of saving a web request, so not inlining
  // the chunk makes for a smoother build process.
  const shouldInlineRuntimeChunk = INLINE_RUNTIME_CHUNK !== "false";
  //
  const emitErrorsAsWarnings = ESLINT_NO_DEV_ERRORS === "true";
  const disableESLintPlugin = DISABLE_ESLINT_PLUGIN === "true";
  //
  const imageInlineSizeLimit = parseInt(
    IMAGE_INLINE_SIZE_LIMIT || "10000"
  );
  //
  // Check if TypeScript is setup
  const useTypeScript = fs.existsSync(paths.appTsConfig);
  // Check if Tailwind config exists
  const useTailwind = fs.existsSync(
    path.join(paths.appPath, "tailwind.config.js") // TODO: use Typescript
  );
  // Get the path to the uncompiled service worker (if it exists).
  const swSrc = paths.swSrc;
  // style files regexes
  const cssRegex = /\.css$/;
  const cssModuleRegex = /\.module\.css$/;
  const sassRegex = /\.(scss|sass)$/;
  const sassModuleRegex = /\.module\.(scss|sass)$/;
  //
  const hasJsxRuntime = (() => {
    if (DISABLE_NEW_JSX_TRANSFORM === "true") {
      return false;
    }
    //
    try {
      require.resolve("react/jsx-runtime");
      return true;
    } catch (e) {
      return false;
    }
  })();
  //
  function configFactory(esbuildEnv: "development" | "production" | "test"): EsBuild.BuildOptions {
    //
    const isEnvDevelopment = esbuildEnv === "development";
    const isEnvProduction = esbuildEnv === "production";
    // Variable used for enabling profiling in Production
    // passed into alias object. Uses a flag if passed into the build command
    const isEnvProductionProfile =
      isEnvProduction && process.argv.includes("--profile"); // use actual process so we don't rely on mutations

    // We will provide `paths.publicUrlOrPath` to our app
    // as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
    // Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
    // Get environment variables to inject into our app.
    const clientSideEnv = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

    const shouldUseReactRefresh = clientSideEnv.raw.FAST_REFRESH;
    //
    return {
      metafile: true,
      treeShaking: isEnvProduction,
      absWorkingDir: paths.appPath,
      // external: ["react", "react-dom"],
      entryPoints: [paths.appIndexJs],
      // TODO: fix paths with HTML interp plugin
      // entryNames: isEnvProduction
      //   ? "static/[ext]/[name].[hash]"
      //   : isEnvDevelopment && "static/[ext]/bundle",
      // // There are also additional JS chunk files if you use code splitting.
      // chunkNames: isEnvProduction
      //   ? "static/[ext]/[name].[hash].chunk"
      //   : isEnvDevelopment && "static/[ext]/[name].chunk",
      // assetNames: isEnvProduction
      //   ? "static/media/[name].[hash][ext]"
      //   : isEnvDevelopment && "static/media/[name]",

      entryNames: "static/[ext]/bundle",
      chunkNames: "static/[ext]/[name].chunk",
      assetNames: "static/media/[name]",
      // splitting: true, // Splitting currently only works with the "esm" format

      outbase: paths.appSrc,
      // outfile: fileURLToPath(new URL(publicOutFile, import.meta.url)), // can't use outdir and outfile together...
      outdir: paths.appBuild,
      // esbuild uses `publicPath` to determine where the app is being served from.
      // It requires a trailing slash, or the file assets will get an incorrect path.
      // We inferred the "public path" (such as / or /my-project) from homepage.
      publicPath: paths.publicUrlOrPath,
      loader: {
        ".jsx": "jsx",
        ".js": "js",
        ".tsx": "tsx",
        ".ts": "ts",
        ".svg": "base64",
        ".png": "file", // 'file' loaders will be prepending by 'publicPath', i.e., 'https://www.publicurl.com/icon.png'
        ".ico": "file",
      },
      bundle: true, // Cannot use "alias" without "bundle"
      alias: {
        // 'oldpkg': 'newpkg',
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        "react-native": "react-native-web",
        // Allows for better profiling with ReactDevTools
        ...(isEnvProductionProfile && {
          "react-dom$": "react-dom/profiling",
          "scheduler/tracing": "scheduler/tracing-profiling",
        }),
      },
      // These are the reasonable defaults supported by the Node ecosystem.
      // We also include JSX as a common component filename extension to support
      // some tools, although we do not recommend using it, see:
      // https://github.com/facebook/create-react-app/issues/290
      // `web` extension prefixes have been added for better support
      // for React Native Web.
      resolveExtensions: paths.moduleFileExtensions
        .map((ext) => `.${ext}`)
        .filter((ext) => useTypeScript || !ext.includes("ts")),
      minify: isEnvProduction,
      sourcemap: isEnvDevelopment,
      define: clientSideEnv.stringified['process.env'],
      // jsxDev: true,
      // jsx: 'automatic',
      // format: 'cjs' // There are currently three possible values that can be configured: iife, cjs, and esm
      // banner: {
      //   // NODE - Append Hot reload event listener to DOM
      //   // js: `new EventSource('/esbuild').addEventListener('change', () => location.reload());`,
      //   // // BROWSER - Append Hot reload event listener to DOM
      //   js: `(() => new EventSource("/esbuild").onmessage = () => location.reload())();`,
      // },
    }
  }
  //
  return configFactory;
}

if (require.main === module) {
  const configFactory = setupConfig(process);
  const config = configFactory("development");
  console.log(config);
}

const configFactory = setupConfig;

export default configFactory;
