const PrerenderSPAPlugin = require('@dreysolano/prerender-spa-plugin')
const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const routes = require('./src/router/doc');

let menus = ['/changba-ui/'];

routes.forEach(item => {
  if (item.children) {
    item.children.forEach(child => {
      menus.push(`/changba-ui${item.path}/${child.path}`);
    });
  }
  else {
    menus.push(`/changba-ui${item.path}`);
  }
});

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/changba-ui/' : '/',
  outputDir: process.env.NODE_ENV === 'production' ? 'dist/changba-ui' : 'dist',
  assetsDir: '_static',
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.whitespace = 'preserve'
        return options
      });

    config.when(process.env.NODE_ENV === 'production', config => {
      config.plugin('prerender').use(PrerenderSPAPlugin, [{
        staticDir: path.join(__dirname, 'dist'),
        indexPath: path.join(__dirname, "dist/changba-ui/index.html"),
        routes: [
          ...menus
        ],
        renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
          headless: true,
          renderAfterDocumentEvent: 'render-event'
        })
      }]);
    });
  }
})
