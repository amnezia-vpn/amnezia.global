module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json',
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "prettier",
    ],
    "rules": {
        'react/function-component-definition': 0, // disable airbnb bugged rule https://github.com/airbnb/javascript/issues/2505
        'react/react-in-jsx-scope': 0, // no need to import React in every component (since React v17)
        'linebreak-style': 0, // disable LF requirement on windows (CLRF),
        'react/no-array-index-key': 0,
        'react/jsx-no-useless-fragment': [
            'error',
            {
                "allowExpressions": true,
                "allowTypedFunctionExpressions": true,
            },
        ],
        'no-param-reassign': 0, // allow params mutation,
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0, // defaultProps will be deprecated
        "import/no-extraneous-dependencies": [
            "error",
            {"devDependencies": true}
        ],
        // '@typescript-eslint/no-require-imports': 0,
    }
}
