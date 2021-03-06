{
  "env": {
    "production": {
      "plugins": ["emotion"]
    },
    "development": {
      "plugins": [
        ["emotion", { "sourceMap": true }],
        "@babel/plugin-proposal-class-properties"
      ]
    }
  },
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    [
      "@emotion/babel-preset-css-prop",
      {
        "autoLabel": true,
        "labelFormat": "[local]"
      }
    ]
  ],
  "plugins": [
    ["module-resolver",{
      "root": ["./src"],
    "alias":{
      "@":"./src"
    }   
  }
  ]
}
