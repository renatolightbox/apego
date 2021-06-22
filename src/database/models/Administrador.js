
const {Model} =  require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Administradores extends Model {
        static associate (models){
    }
}

Administradores.init (
{
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha : DataTypes.STRING,
},
{
    sequelize,
    paranoid:true,
    modelName: 'Administradores'
      }
      )
    return Administradores
 }

