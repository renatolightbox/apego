const {usuario} = require('../models')
const Usuario = require('../models/Usuario')

const UserControler= {
    index: (req,res) =>{
        let users = Usuario.findAll();

        console.log(users)


    }
}

module.exports = UserControler 