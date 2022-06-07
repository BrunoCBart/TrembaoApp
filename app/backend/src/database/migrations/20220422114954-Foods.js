'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Foods', {
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
      price: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      foodTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'FoodTypes',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      foodSubTypeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'FoodSubTypes',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        defaultValue: null
      },
      onMenu: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Foods')
  }
}
