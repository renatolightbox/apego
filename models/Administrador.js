const { DataTypes } = require('sequelize');
const { sequelize } = require('../models/index');

const Administrador = sequelize.define('Administrador', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome:DataType.STRING,
    email: DataType.STRING,
    senha : DataType.STRING,
},
{
    tableName: 'administradores',
    timestamps: false   
}
 )


module.exports = Administrador





