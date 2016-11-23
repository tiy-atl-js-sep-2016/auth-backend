'use strict'

const Lucid = use('Lucid')
const OrderItem = use('App/Model/OrderItem')
const User = use('App/Model/User')

class Order extends Lucid {

  items () {
    return this.hasMany(OrderItem)
  }

  user () {
    return this.belongsTo(User)
  }

}

module.exports = Order
