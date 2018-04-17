module.exports = {
    'extends': 'google',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
    },
    'rules': {
        'max-len': [
            'error', {
                'code': 120,
                'comments': 80,
            },
        ],
    },
    'globals': {
        'SETTINGS': true,
        'Drupal': true,
        'drupalSettings': true,
    },
};
