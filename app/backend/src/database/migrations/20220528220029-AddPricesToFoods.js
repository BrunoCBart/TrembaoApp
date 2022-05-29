'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Foods', 'price', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Foods', 'price')
  }
}
