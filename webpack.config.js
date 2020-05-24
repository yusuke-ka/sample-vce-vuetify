const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: "url-loader",
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            // Requires sass-loader@^7.0.0
            options: {
              implementation: require("sass"),
              fiber: require("fibers"),
              indentedSyntax: true, // optional
            },
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
                indentedSyntax: true, // optional
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin(), new VuetifyLoaderPlugin()],
  performance: { hints: false }, // パフォーマンスの警告が出ないようにする
};
