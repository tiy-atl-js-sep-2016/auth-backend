'use strict'

const Schema = use('Schema')

class AddressesSchema extends Schema {

  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.timestamps()
      table.string('street')
      table.string('city')
      table.string('state')
      table.integer('zip')
    })
  }

  down () {
    this.drop('addresses')
  }

}

module.exports = AddressesSchema
