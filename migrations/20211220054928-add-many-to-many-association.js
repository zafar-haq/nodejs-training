'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('ProductTags',{
      ProductId:{
          type:Sequelize.INTEGER,
          references:{
            model:'Products',
            key:'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
      },
      TagId:{
        type:Sequelize.INTEGER,
        references:{
          model:'Tags',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete: 'SET NULL'
      }
    }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
