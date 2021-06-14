const { DataTypes } = require('sequelize');
const { sequelize } = require('../models/index');



const Condominio = sequelize.define( 'Condominio' , {
    id :{
         type:DataType.INTERGER,
         primaryKey: true,
         autoIncrement:true
     },

     nome:DataType.STRING,
     endereco: DataType.STRING,
     email: DataType.STRING,
    ADMIN_ID: {
        type: DataType.STRING,
        forignkey: true
    },
     senha : DataType.STRING,
 },{
     tableName: 'moradores',
     timestamps: false    
})
module.exports =  Condominio


