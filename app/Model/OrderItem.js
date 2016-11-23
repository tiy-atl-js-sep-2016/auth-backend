'use strict'

const Lucid = use('Lucid')
const Order = use('App/Model/Order')

class OrderItem extends Lucid {

  order () {
    return this.belongsTo(Order)
  }

}

module.exports = OrderItem
