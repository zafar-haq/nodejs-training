'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn(
      'Products', 
      'price',
      Sequelize.INTEGER
    )
    .then( () => {
      return queryInterface.renameColumn(
        'Orders',
        'name', 
        'quantity'
      )
    })
    .then (() => {
      return queryInterface.changeColumn(
        'Orders', 'quantity', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      )
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.changeColumn(
      'Orders', 'quantity', {
        type:Sequelize.STRING,
        allowNull:true
      }
    )
    .then(() => {
      return queryInterface.renameColumn('Orders', 'quantity', 'name')
    })
    .then(() => {
      return queryInterface.removeColumn('Products', 'price')
    })
  }
};
