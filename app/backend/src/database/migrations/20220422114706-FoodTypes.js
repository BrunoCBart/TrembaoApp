'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('FoodTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      foodThemeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'FoodThemes',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('FoodTypes')
  }
}
