'use strict'

const Hash = use('Hash')
const User = use('App/Model/User')

class UserController {
  * register (request, response) {
    let data = request.only('email', 'username', 'password')
    data.password = yield Hash.make(data.password)
    let user = yield User.create(data)

    response.status(201).json(user)
  }

  * login (request, response) {
  }
}

module.exports = UserController
