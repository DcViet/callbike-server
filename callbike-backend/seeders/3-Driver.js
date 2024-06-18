'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const driversData = [
      {
        driverId: 1,
        name: "Trần Văn Nam",
        phoneNumber: "0945678321",
        currentLocation: "Tọa độ GPS: 10.8030, 106.6907",
        workStatus: "available",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 2,
        name: "Lê Thị Hằng",
        phoneNumber: "0978901234",
        currentLocation: "Vị trí gần đây: Ngã tư đường X - Y",
        workStatus: "working",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 3,
        name: "Phạm Minh Hiếu",
        phoneNumber: "0865432190",
        currentLocation: "Tọa độ GPS: 10.7643, 106.7312",
        workStatus: "available",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 4,
        name: "Đinh Ngọc Mai",
        phoneNumber: "0332145678",
        currentLocation: "Vị trí gần đây: Bến xe",
        workStatus: "off",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 5,
        name: "Nguyễn Thị Lan",
        phoneNumber: "0917890123",
        currentLocation: "Tọa độ GPS: 10.7854, 106.6789",
        workStatus: "available",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 6,
        name: "Trần Văn Nam",
        phoneNumber: "0917890456",
        currentLocation: "Tọa độ GPS: 10.7855, 106.6790",
        workStatus: "available",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 7,
        name: "Lê Thị Mai",
        phoneNumber: "0917890789",
        currentLocation: "Tọa độ GPS: 10.7856, 106.6791",
        workStatus: "off",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 8,
        name: "Phạm Văn Long",
        phoneNumber: "0917891123",
        currentLocation: "Tọa độ GPS: 10.7857, 106.6792",
        workStatus: "available",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 9,
        name: "Vũ Thị Huệ",
        phoneNumber: "0917891456",
        currentLocation: "Tọa độ GPS: 10.7858, 106.6793",
        workStatus: "off",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        driverId: 10,
        name: "Đặng Văn Bình",
        phoneNumber: "0917891789",
        currentLocation: "Tọa độ GPS: 10.7859, 106.6794",
        workStatus: "available",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    

    
    await queryInterface.bulkInsert('Drivers', driversData, {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Drivers', null, {});
  }
};
