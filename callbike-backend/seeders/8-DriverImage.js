const { Model } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tạo dữ liệu cho DriverImage
    const driverImages = [
      {
        imageId: 1,
        imageUrl: "https://example.com/driver_avatar_1.jpg",
        driverId: 1, 
        isAvatar: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageId: 2,
        imageUrl: "https://example.com/driver_image_2.jpg",
        driverId: 2, 
        isAvatar: false, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageId: 3,
        imageUrl: "https://example.com/driver_avatar_3.jpg",
        driverId: 3, 
        isAvatar: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageId: 4,
        imageUrl: "https://example.com/driver_image_4.jpg",
        driverId: 4,
        isAvatar: false, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ];

    await queryInterface.bulkInsert('DriverImages', driverImages, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa dữ liệu
    await queryInterface.bulkDelete('DriverImages', null, {});
  }
};
