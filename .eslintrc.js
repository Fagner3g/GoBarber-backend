module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error", // Habilita o prettier a informar todos erros encontrados.
    "class-methods-use-this": "off", // Desabilita a obrigatoriedade do this em todos metodos.
    "no-param-reassign": "off", // Faz com que eu receba um parâmetro e possa modifica-lo.
    "camelcase": "off", // Desabilita que todas váriaveis sejam definas em camelcase.
    "no-unused-vars": ["error", { "argsIgonorePatter": "next" }] // Informa ao Eslint para ignorar a váriavel next quando for declarada e não utilizada.
  },
};

/**
 * Realizar correção em todos arquivos
 * yarn eslint --fix src --ext .js
 */
