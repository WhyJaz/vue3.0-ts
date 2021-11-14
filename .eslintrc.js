module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-trailing-spaces': 'off',
    'space-before-function-paren': 'off', // 不强制要求函数名与括号间有空格
    'semi': 'off', // 允许存在分号
    'padded-blocks': 'off', // 允许存在空行
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
