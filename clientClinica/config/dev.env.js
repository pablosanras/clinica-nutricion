'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  // Conexion a nuestra ruta de nuestra API de información
  API: '"http://localhost:9000/"'
})
