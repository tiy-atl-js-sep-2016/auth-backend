'use strict'

const Lucid = use('Lucid')
const Token = use('App/Model/Token')
const Order = use('App/Model/Order')

class User extends Lucid {

  static get hidden () {
    return ['password']
  }

  apiTokens () {
    return this.hasMany(Token)
  }

  orders () {
    return this.hasMany(Order)
  }

}

module.exports = User
