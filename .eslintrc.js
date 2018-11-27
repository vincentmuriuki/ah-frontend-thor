module.exports = {
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "modules": true
    },
    "extends": "airbnb",
    "env": {
        "es6": true
    },    
    "rules": {
        "indent": [2, "tab"],
        "react/jsx-indent": [2, "tab"],
        "curly": [2, "multi-line"]
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "jsx-a11y/label-has-for": "off"
    
};
