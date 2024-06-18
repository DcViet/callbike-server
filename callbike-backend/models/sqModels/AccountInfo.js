'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AccountInfo extends Model {
    static associate(models) {
      
      AccountInfo.belongsTo(models.Customer, { foreignKey: 'customerId' });
    
    }
  }
  AccountInfo.init(
    {
      // Define fields/columns of AccountInfo table here
      accountId: {
        type: DataTypes.INTEGER,
        primaryKey: true,

      },
      customerId: DataTypes.INTEGER,
      idNumber: DataTypes.STRING, // Số căn cước
      paymentInfo: {
        type: DataTypes.JSON,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'AccountInfo',
      timestamps: true
    }
  );
  return AccountInfo;
};
