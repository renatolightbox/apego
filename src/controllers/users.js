//const {usuario} = require('../models')
//const Usuario = require('../models/Usuario')



const UserControler= {
    index: (req,res) =>{
        let users = Usuario.findAll();



        console.log(users)


    },
   register: (req ,res) =>{
       console.log (req.body)
       res.json ({status:true})
   }
}

module.exports = UserControler 