'use strict';

const { hash } = require("../../cipher");

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('usuarios', [{
      name: "karina",
      email: "teste@gmail.com",
      condominio: "teste",
      unidade: "25",
      senha: hash('23456'),
    }])
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelet('usuarios', [{
      email: "teste@gmail.com",
    }])
  }
};
