
'use strict';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import {jsUse} from './javascript';
import {scssUse} from './scss';

export default () => ({
    module: {
        rules: [
            // JavaScript
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    preserveWhitespace: false,
                    loaders: {
                        scss: ExtractTextPlugin.extract({
                            fallback: 'vue-style-loader',
                            use: scssUse
                        }),
                        js: jsUse
                    }
                }
            }
        ]
    }
});
