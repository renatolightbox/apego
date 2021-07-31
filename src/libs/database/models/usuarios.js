const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Usuarios extends Model {
        static associate(models) {
        }
    }

    Usuarios.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            condominio: DataTypes.STRING,
            unidade: DataTypes.STRING,
            senha: DataTypes.STRING,
        },
        {
            sequelize,
            paranoid: true,
            tableName: 'usuarios',
            modelName: 'Usuarios'
        }
    )
    return Usuarios
}

