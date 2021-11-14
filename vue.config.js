const path = require("path");

function resolve(url) {
   return path.resolve(__dirname, url);
}

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
    .set("@src",resolve("./src"))
    .set("@views",resolve("./src/views"))
    .set("@hooks",resolve("./src/hooks"))
    .set("@utils", resolve("./src/utils"))
    .set("@store",resolve("./src/store"))
    .set("@assets",resolve("./src/assets"))
    .set("@router",resolve("./src/router"))
    .set("@configs",resolve("./src/configs"))
    .set("@components", resolve("./src/components"))
 },
  configureWebpack: config => {
    config.devtool = '#source-map'
  }
}