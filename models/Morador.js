
const { DataTypes } = require('sequelize');
const { sequelize } = require('../models/index');

   
    const Morador = sequelize.define( 'Morador' , {
        id :{
             type: DataType.INTERGER,
             primaryKey: true,
             autoIncrement:true
         },
 
         nome:DataType.STRING,
         email: DataType.STRING,
         condominio: DataType.STRING,
         unidade : DataType.STRING,
         senha : DataType.STRING,
     },{
         tableName: 'moradores',
         timestamps: false    
    })
    module.exports =  Morador 
 

 