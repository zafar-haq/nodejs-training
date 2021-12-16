'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Customer.init({
    name:{ 
    type:DataTypes.STRING,
    validate: {
      is: /^[a-zA-Z]+$/i
    }
  }
  }, {
    hooks: {
      beforeValidate:(user, options) => {user.name=user.name.toString()},
      afterValidate:(user, options) => {/*user.name='after validation'*/}
  },
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};