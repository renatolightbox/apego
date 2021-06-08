
const model = (sequelize , DataType)=>{
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
    return Morador

 }


   
    module.exports =  model  
 

 