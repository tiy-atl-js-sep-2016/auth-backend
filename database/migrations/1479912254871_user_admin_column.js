'use strict'

const Schema = use('Schema')

class UserAdminColumnTableSchema extends Schema {

  up () {
    this.table('user_admin_column', (table) => {
      table.boolean('admin').default(false)
    })
  }

  down () {
    this.table('user_admin_column', (table) => {
      table.dropColumn('admin')
    })
  }

}

module.exports = UserAdminColumnTableSchema
