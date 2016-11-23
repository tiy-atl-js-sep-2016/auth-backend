'use strict'

const Schema = use('Schema')

class UserAdminColumnTableSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.boolean('admin').default(false)
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('admin')
    })
  }

}

module.exports = UserAdminColumnTableSchema
