
'use strict';

import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import SvgStore from 'webpack-svgstore-plugin';

import scss from './parts/scss';
import javascript from './parts/javascript';
import vueComponent from './parts/vue.component';

export default merge([
    {
        entry: path.resolve(__dirname, '../src/index.js'),

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist'),
        },

        resolve: {
            alias: {
                'vue': 'vue/dist/vue.common.js',
            }
        },

        // Plugins for all environments
        plugins: [

            // Make the jQuery and Vue libraries available globally
            new webpack.ProvidePlugin({
                'Vue': 'vue',
            }),

            // Use ExtractTextPlugin to generate a .css file
            new ExtractTextPlugin({
                filename: 'bundle.css',

                // Disable this plugin when in development mode so that we can
                // use hot module reloading
                disable: process.env.NODE_ENV === 'development',
            }),

            // Use SvgStore to combine a bunch of .svg icons into one .svg
            // sprite sheet
            new SvgStore({
                prefix: 'icon-',
            }),
        ],
    },

    javascript(),

    scss(),

    vueComponent(),
]);
