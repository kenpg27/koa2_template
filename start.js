require('babel-register')
  (
    {
      plugins: ['babel-plugin-transform-es2015-modules-commonjs'],
    }
  )

module.exports = require('./bin/www')
