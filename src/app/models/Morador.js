module.exports = (sequelize , DataTypes)=>{
    const Morador = sequelize.define( 'Morador' , {
        id :{
        
             type: DataType.INTERGER,
             primaryKey: true,
             autoIncrement:true
         },
 
         nome:DataTypes.STRING,

         email: { 
            type: DataTypes.STRING,
            validate:{
                isEmail: true,
            },
        },

         condominio: DataTypes.STRING,
         unidade : DataTypes.STRING,
         senha : DataTypes.STRING,
     },{
         tableName: 'moradores',
         timestamps: false    
    });
    return Morador;

 };


 

 