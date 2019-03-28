const sass = require('@stencil/sass');

exports.config = {
  namespace: 'ockqrcode',
  bundles: [
    { components: ['ock-qrcode'] }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
