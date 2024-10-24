/** @see https://github.com/docker/awesome-compose/blob/master/react-java-mysql/frontend/src/setupProxy.js */

/** @type {import('http-proxy-middleware')} */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://backend:8080',
      pathRewrite: { '^/api': '' },
    })
  );
};
