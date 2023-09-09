
module.exports = {
  root: true,
  env: {
    node: true,//node环境
    es6: true, //注意es6环境使用到要加入
    browser: true,//浏览器环境
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-unused-vars": "off",  //禁止出现未使用过的变量
    "no-undef": "off", //禁止使用未定义的变量
  }
}
