
'use strict';

import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let styleDirectory = path.resolve(__dirname, './../../src');

// Convert windows style path (c:\path\to\project) to unix style
// path (c:/path/to/project) otherwise it will cause issues in json-parse
styleDirectory = styleDirectory.replace(/\\/g, '/');

// The use of scss could be reused in vue-loader's scss config
export const scssUse = [
    // css-loader - Translates CSS into CommonJS
    {
        loader: "css-loader",
        options: {
            // Commenting this out as it was causing race conditons in our
            // highcharts rendering - cc
            // sourceMap: true,
        }
    },

    // postcss-loader - Runs the CSS through 'post-css' which
    // adds auto-prefixing and logs CSS errors to the console
    {
        loader: "postcss-loader",
        options: {
            sourceMap: true,
            // see more options in postcss.config.js
        }
    },

    // sass-loader - Compiles Scss into CSS
    {
        loader: "sass-loader",
        options: {
            // Minify if using a production build
            outputStyle: process.env.NODE_ENV === 'production' ? 'compressed' : 'nested',

            // Inject the commonly used variables and mixins and an Scss
            // variable so the css can be aware of the environment
            // (used for visible breakpoints)
            data: "@import 'variables'; @import 'mixins'; $env: " + process.env.NODE_ENV + ";",

            // allow vue component import file form these directories
            includePaths: [styleDirectory],

            sourceMap: true,
        }
    }
];

export default () => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    // If the 'ExtractTextPlugin' fails, fall back to injecting
                    // <style> tag
                    fallback: 'style-loader',

                    use: scssUse
                })
            }
        ]
    }
});
