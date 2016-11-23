'use strict'

const Schema = use('Schema')

class OrderItemsTableSchema extends Schema {

  up () {
    this.create('order_items', (table) => {
      table.increments()
      table.timestamps()
      table.integer('product_id').references('id').inTable('products')
      table.integer('order_id').references('id').inTable('orders')
      table.integer('quantity')
    })
  }

  down () {
    this.drop('order_items')
  }

}

module.exports = OrderItemsTableSchema
