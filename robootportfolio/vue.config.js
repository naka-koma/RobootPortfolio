const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../docs',
  publicPath: './',
  pages: {
    index: {
      entry: "src/main.js",
      title: "Roboot Portfolio",
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
    }
  }
})
