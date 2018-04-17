
'use strict';

export const jsUse = [
    {
        loader: 'babel-loader',
    },
    {
        loader: 'eslint-loader',
        options: {
            formatter: require('eslint/lib/formatters/codeframe'),
        }
    }
];

export default () => ({
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                use: jsUse
            }
        ]
    }
});
