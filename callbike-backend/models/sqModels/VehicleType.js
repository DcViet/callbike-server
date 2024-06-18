'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VehicleType extends Model {
    static associate(models) {
      // Define associations here
      VehicleType.hasMany(models.Driver, { foreignKey: 'vehicleTypeId' });
    }
  }
  VehicleType.init(
    {
      typeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
      },
      typeName: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'VehicleType',
      timestamps: true
    }
  );
  return VehicleType;
};
