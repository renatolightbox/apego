const {Model} =  require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Usuarios extends Model {
        static associate (models){
    }
}

Usuarios.init (
{
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    condominio: DataTypes.STRING,
    unidade : DataTypes.STRING,
    senha : DataTypes.STRING,
},
{
    sequelize,
    paranoid:true,
    modelName: 'Usuarios'
      }
      )
    return Usuarios
 }

