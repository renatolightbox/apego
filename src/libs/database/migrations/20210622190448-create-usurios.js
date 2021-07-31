'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable ('usuarios' , {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER,
      },

      name:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      condominio: {
        type: Sequelize.STRING,
      },
      unidade: {
        type: Sequelize.STRING,
      },
       senha: {
        type: Sequelize.STRING,
        allowNull: false
       },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.fn('NOW')
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable ('usuarios')
   }
}
