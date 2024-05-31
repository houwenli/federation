const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "parent",
        remotes: {
          childVue3: "childVue3@http://localhost:8080/remoteEntry.js",
        }
      })
    ]
    
  }
})
