'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const customersData = [
      {
        customerId: 1,
        name: "Nguyễn Văn An",
        phoneNumber: "0901234567",
        email: "null",
        homeAddress: "123 đường ABC, Quận 1, TP.HCM",
        currentLocation: "Tọa độ GPS: 10.7753, 106.7793",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customerId: 2,
        name: "Trần Thị Mai",
        phoneNumber: "0987654321",
        email: "null",
        homeAddress: "456 đường XYZ, Quận 2, TP.HCM",
        currentLocation: "Vị trí gần đây: Cửa hàng tiện lợi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customerId: 3,
        name: "Lê Minh Hiếu",
        phoneNumber: "0383828180",
        email: "null",
        homeAddress: "789 đường DEF, Quận 3, TP.HCM",
        currentLocation: "Tại nhà",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customerId: 4,
        name: "Phạm Thu Hà",
        phoneNumber: "0707898765",
        email: "null",
        homeAddress: "123 đường ABC, Quận 1, TP.HCM",
        currentLocation: "GPS: 10.7753, 106.7793",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customerId: 5,
        name: "Đinh Ngọc Minh",
        phoneNumber: "0932145678",
        email: "null",
        homeAddress: "456 đường XYZ, Quận 2, TP.HCM",
        currentLocation: "Quán cà phê ABC",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customerId: 6,
        name: "Nguyễn Văn B",
        phoneNumber: "0912345678",
        email: "null",
        homeAddress: "789 đường DEF, Quận 3, TP.HCM",
        currentLocation: "Tại công ty",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customerId: 7,
        name: "Trần Thị Lan",
        phoneNumber: "0987654322",
        email: "null",
        homeAddress: "123 đường ABC, Quận 1, TP.HCM",
        currentLocation: "GPS: 10.7753, 106.7793",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customerId: 8,
        name: "Lê Minh Quân",
        phoneNumber: "0383828181",
        email: "null",
        homeAddress: "456 đường XYZ, Quận 2, TP.HCM",
        currentLocation: "Trung tâm thương mại",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customerId: 9,
        name: "Phạm Thu Hiền",
        phoneNumber: "0707898766",
        email: "null",
        homeAddress: "789 đường DEF, Quận 3, TP.HCM",
        currentLocation: "Tại nhà",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customerId: 10,
        name: "Đinh Ngọc Tuấn",
        phoneNumber: "0932145679",
        email: "null",
        homeAddress: "123 đường ABC, Quận 1, TP.HCM",
        currentLocation: "GPS: 10.7753, 106.7793",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Customers', customersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
