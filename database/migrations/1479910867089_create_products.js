'use strict'

const Schema = use('Schema')

class ProductsTableSchema extends Schema {

  up () {
    this.create('products', (table) => {
      table.increments()
      table.timestamps()
      table.string('title')
      table.string('description')
      table.string('category')
      table.string('image_url')
      table.decimal('price')
    })
  }

  down () {
    this.drop('products')
  }

}

module.exports = ProductsTableSchema
