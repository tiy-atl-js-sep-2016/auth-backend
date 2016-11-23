'use strict'

const Schema = use('Schema')

class OrdersTableSchema extends Schema {

  up () {
    this.create('orders', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id').references('id').inTable('users')
      table.integer('address_id').references('id').inTable('addresses')
      table.decimal('total')
    })
  }

  down () {
    this.drop('orders')
  }

}

module.exports = OrdersTableSchema
