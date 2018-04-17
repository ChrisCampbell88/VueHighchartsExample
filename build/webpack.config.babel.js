
'use strict';

import merge from 'webpack-merge';


// Monkii bars webpack config
// ==========================

import commonConfig from './webpack.common';
import developmentConfig from './webpack.development';
import productionConfig from './webpack.production';

module.exports = mode => {
    console.log('Build mode: ' + mode);

    switch (mode) {
        case 'production': // Production build
            return merge(commonConfig, productionConfig, {mode});

        default: // Development build
            return merge(commonConfig, developmentConfig, {mode});
    }
};
