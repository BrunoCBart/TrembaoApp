'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('FoodThemes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('FoodThemes')
  }
}
