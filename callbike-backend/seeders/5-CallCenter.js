const { Model } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tạo dữ liệu cho CallCenter
    const callCenters = [
      {
        callId: 1,
        callTime: new Date("2024-03-25 10:15:00"),
        pickupLocation: "123 đường ABC, Quận 1, TP.HCM",
        dropoffLocation: "456 đường XYZ, Quận 2, TP.HCM",
        status: "processing",
        customerId: 1,
        driverId: 1,
        requestId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        callId: 2,
        callTime: new Date("2024-03-26 15:30:00"),
        pickupLocation: "789 đường DEF, Quận 3, TP.HCM",
        dropoffLocation: "Sân bay Tân Sơn Nhất",
        status: "completed",
        customerId: 2,
        driverId: 2,
        requestId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        callId: 3,
        callTime: new Date("2024-03-27 09:00:00"),
        pickupLocation: "KTX Đại học Quốc gia TP.HCM",
        dropoffLocation: "Ga Sài Gòn",
        status: "processing",
        customerId: 3,
        driverId: 3,
        requestId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        callId: 4,
        callTime: new Date("2024-03-28 14:00:00"),
        pickupLocation: "Bến xe Miền Tây",
        dropoffLocation: "Bến xe Miền Đông",
        status: "completed",
        customerId: 4,
        driverId: 4,
        requestId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        callId: 5,
        callTime: new Date("2024-03-29 18:00:00"),
        pickupLocation: "Trung tâm thương mại Vincom Center",
        dropoffLocation: "Nhà hát Thành phố",
        status: "processing",
        customerId: 5,
        driverId: 5,
        requestId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        callId: 6,
        callTime: new Date("2024-03-30 10:30:00"),
        pickupLocation: "Phú Mỹ Hưng",
        dropoffLocation: "Khu du lịch Suối Tiên",
        status: "completed",
        customerId: 6,
        driverId: 6,
        requestId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        callId: 7,
        callTime: new Date("2024-03-31 12:00:00"),
        pickupLocation: "Sân bay Tân Sơn Nhất",
        dropoffLocation: "Vũng Tàu",
        status: "completed",
        customerId: 7,
        driverId: 7,
        requestId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        callId: 8,
        callTime: new Date("2024-04-01 15:00:00"),
        pickupLocation: "Bình Thạnh",
        dropoffLocation: "Thủ Đức",
        status: "completed",
        customerId: 8,
        driverId: 8,
        requestId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        callId: 9,
        callTime: new Date("2024-04-02 18:00:00"),
        pickupLocation: "Quận 1",
        dropoffLocation: "Quận 7",
        status: "processing",
        customerId: 9,
        driverId: 9,
        requestId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        callId: 10,
        callTime: new Date("2024-04-03 20:00:00"),
        pickupLocation: "Gò Vấp",
        dropoffLocation: "Tân Bình",
        status: "completed",
        customerId: 10,
        driverId: 10,
        requestId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];
    
    await queryInterface.bulkInsert('CallCenters', callCenters, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CallCenters', null, {});
  }
};
