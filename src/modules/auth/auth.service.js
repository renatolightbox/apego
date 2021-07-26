const { hash, verify } = require('../../libs/cipher')
// const UserService = require('../users/users.service')
const UserService = require('../users/users.service')

class AuthService {
  static async authenticate(email, password) {
    try {
      const user = await UserService.findByEmail(email)
      console.log(user)

      if (user && verify(password, user.senha)) {
        return user
      }

      return false
    } catch (err) {
      console.log(err)
      return false
    }
  }
}

module.exports = AuthService
