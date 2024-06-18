const { Model } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tạo dữ liệu cho VehicleRegistration
    const vehicleRegistrations = [
      {
        registrationId: 1,
        licensePlate: "29A - 123456",
        driverId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        registrationId: 2,
        licensePlate: "29B - 654321",
        driverId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 3,
        licensePlate: "29C - 987654",
        driverId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 4,
        licensePlate: "29L - 789012",
        driverId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 5,
        licensePlate: "29D - 123457",
        driverId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 6,
        licensePlate: "29E - 123458",
        driverId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 7,
        licensePlate: "29F - 123459",
        driverId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 8,
        licensePlate: "29G - 123460",
        driverId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 9,
        licensePlate: "29H - 123461",
        driverId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registrationId: 10,
        licensePlate: "29I - 123462",
        driverId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('VehicleRegistrations', vehicleRegistrations, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa dữ liệu
    await queryInterface.bulkDelete('VehicleRegistrations', null, {});
  }
};
