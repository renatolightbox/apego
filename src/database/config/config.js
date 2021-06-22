

module.exports = {
    development: {
      username: 'root',
      password: '',
      database: 'apego',
      host: 'localhost',
      port: '3306',
      dialect: 'mysql',
      timezone: '-03:00'
    },
    test: {
      username: 'root',
      password: '',
      database: 'database_test',
      host: '127.0.0.1',
      dialect: 'mysql'
    },
    production: {
      username: 'root',
      password: null,
      database: 'database_production',
      host: '127.0.0.1',
      dialect: 'mysql'
    }
  }
  