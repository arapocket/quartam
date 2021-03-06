module.exports = {
    "env": {
        "node": true, 
        "browser": true,
        "es6": true 
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "react/prop-types": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      }
}