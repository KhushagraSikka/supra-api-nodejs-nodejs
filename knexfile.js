const config = require('./config')

module.exports = {
  development: {
    ...config.knex
  }
}


// TODO: Consider refactoring for better performance