const {hash} = require('../../libs/cipher')
const {Usuarios} = require('../../libs/database/models')


class UserService {
    static findAll () {
      return Usuarios.findAll()
    }

    static findById (userId) {
      const user = userList.find(user => user.id == userId)

      return user
  }
  
    static findWhere (query) {
      return Usuarios.findWhere(query)
    }
  
    static findByEmail (email) {
      return Usuarios.findOne({ where: { email } })
    }
  
    static create (userToSave) {
      userToSave.senha = hash(userToSave.senha)
  
      return Usuarios.create(userToSave)
    }
  
    static async update (userId, userData) {
      const user = await Usuarios.findByPk(userId)
  
      Object.assign(user, userData)
      await user.save()
  
      return user
    }
  
    static remove (userId) {
      return Usuarios.destroy({
        where: {
          id: userId
        }
      })
    }
  }
  
  module.exports = UserService