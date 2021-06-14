const { QueryInterface } = require("sequelize/types")

module.exports = {
  up:  (queryInterface, Sequelize) => queryInterface.createTable('Morador' ,{
  id:{
    allowNull: false ,
    autoIncrement:true,
    primaryKey: true,
    type: Sequelize.INTERGER,
  },
  name:{
    allowNull:false,
    type: Sequelize.STRING,
  },
  email: {
    allowNull:false,
    type: Sequelize.STRING,
  },

  // CONDOMINIO
  //UNIDADE
  //SENHA 
  create_at:{
    allowNull:false,
    type: Sequelize.DATE
  },
  update_at:{
    allowNull:false,
    type: Sequelize.DATE
  },
  }),

  down: QueryInterface=>QueryInterface.dropTable('users')
  
};
