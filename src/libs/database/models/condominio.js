
const {Model} =  require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Condominos extends Model {
        static associate (models){
    }
}
Condominos.init 

(
    {
        nome: DataTypes.STRING,
        endereco:DataTypes.STRING,
        email: DataTypes.STRING,
        senha : DataTypes.STRING,
    },
    {
        sequelize,
        paranoid:true,
        modelName: 'Condominos'
          }
          )
        return Condominos
     }
    
    
