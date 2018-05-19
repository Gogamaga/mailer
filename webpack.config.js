const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "public/js"),
        filename: "bundle.js",
        publicPath: "/public/"
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "stage-0", "react"]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: / /,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
