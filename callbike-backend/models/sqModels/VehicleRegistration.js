'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VehicleRegistration extends Model {
    static associate(models) {
      VehicleRegistration.belongsTo(models.Driver, { foreignKey: 'driverId' });
    }
  }
  VehicleRegistration.init(
    {
      registrationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
      },
      licensePlate: {
        type: DataTypes.STRING,
        unique: true
      },
      driverId: {
        type: DataTypes.INTEGER,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'VehicleRegistration',
      timestamps: true
    }
  );
  return VehicleRegistration;
};
