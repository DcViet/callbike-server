'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CallCenter extends Model {
    static associate(models) {
      // Define associations here
      CallCenter.belongsTo(models.Customer, { foreignKey: 'customerId' });
      CallCenter.belongsTo(models.Driver, { foreignKey: 'driverId' });
      CallCenter.belongsTo(models.RideRequest, { foreignKey: 'requestId' });
    }
  }
  CallCenter.init(
    {
      callId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
      },
      callTime: DataTypes.DATE,
      pickupLocation: DataTypes.TEXT,
      dropoffLocation: DataTypes.TEXT,
      status: DataTypes.ENUM('processing', 'completed')
    },
    {
      sequelize,
      modelName: 'CallCenter',
      timestamps: true
    }
  );
  return CallCenter;
};
