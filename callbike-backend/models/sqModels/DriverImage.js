'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DriverImage extends Model {
    static associate(models) {
      // Define associations here
      DriverImage.belongsTo(models.Driver, { foreignKey: 'driverId' });
    }
  }
  DriverImage.init(
    {
      imageId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
      },
      imageUrl: DataTypes.STRING,
      isAvatar: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      driverId: {
        type: DataTypes.INTEGER,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'DriverImage',
      timestamps: true
    }
  );
  return DriverImage;
};
