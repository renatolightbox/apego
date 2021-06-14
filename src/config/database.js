
const config = {

  database:{

    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'apego',
    operatorAliases: false,
    difine: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    }
  }
}
module.exports = config