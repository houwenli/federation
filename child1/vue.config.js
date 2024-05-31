const { defineConfig } = require('@vue/cli-service')

const { ModuleFederationPlugin } = require("webpack").container;
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        filename: 'remoteEntry.js',
        name: 'childVue3',
        exposes: {
          './HelloWorld': './src/HelloWorld.vue'
        }
      })
    ]
  }
})
