const { Model } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tạo dữ liệu cho VehicleType
    const vehicleTypes = [
      {
        typeId: 1,
        typeName: "Car",
        description: "4-door sedan or hatchback vehicles suitable for most passengers and luggage.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeId: 2,
        typeName: "SUV",
        description: "Sport Utility Vehicles offering more space and cargo capacity than cars.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeId: 3,
        typeName: "MPV",
        description: "Multi-Purpose Vehicles with additional seating rows for larger families or groups.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeId: 4,
        typeName: "Motorcycle",
        description: "Two-wheeled vehicles for single riders or riders with one passenger.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('VehicleTypes', vehicleTypes, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa dữ liệu
    await queryInterface.bulkDelete('VehicleTypes', null, {});
  }
};
