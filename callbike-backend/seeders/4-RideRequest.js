const { Model } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const rideRequests = [
      {
        requestId: 1,
        requestTime: new Date("2024-03-25 09:00:00"), // Thời gian yêu cầu cuốc đi mẫu
        pickupLocation: "123 đường ABC, Quận 1, TP.HCM", // Địa điểm đón khách mẫu
        dropoffLocation: "456 đường XYZ, Quận 2, TP.HCM", // Địa điểm trả khách mẫu
        status: "processing", // Trạng thái yêu cầu ("completed" vì là dữ liệu mẫu)
        completionTime: new Date("2024-03-25 09:45:00"), // Thời gian hoàn thành cuốc đi mẫu
        distance: 5.2, // Khoảng cách ước tính (thay thế bằng giá trị phù hợp)
        driverRating: 5, // Đánh giá tài xế (thay thế bằng giá trị 1-5)
        customerId: 1, // Giả sử ID khách hàng này tồn tại (liên kết với bảng Customer)
        driverId: 1, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 2,
        requestTime: new Date("2024-03-26 12:00:00"), // Thời gian yêu cầu cuốc đi mẫu
        pickupLocation: "789 đường DEF, Quận 3, TP.HCM", // Địa điểm đón khách mẫu
        dropoffLocation: "Sân bay Tân Sơn Nhất", // Địa điểm trả khách mẫu
        status: "completed", // Trạng thái yêu cầu (đã được phân công tài xế)
        completionTime: null, // Chưa hoàn thành cuốc đi (xóa nếu cần)
        distance: 12.5, // Khoảng cách ước tính (thay thế bằng giá trị phù hợp)
        driverRating: null, // Chưa đánh giá tài xế (xóa nếu cần)
        customerId: 2, // Giả sử ID khách hàng này tồn tại (liên kết với bảng Customer)
        driverId: 2, // Giả sử ID tài xế này tồn tại (liên kết với bảng Driver)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 3,
        requestTime: new Date("2024-03-27 17:00:00"), 
        pickupLocation: "KTX Đại học Quốc gia TP.HCM", 
        dropoffLocation: "Ga Sài Gòn", 
        status: "processing", 
        completionTime: null, 
        distance: null, 
        driverRating: null, 
        customerId: 3,
        driverId: 3, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 4,
        requestTime: new Date("2024-03-28 10:00:00"),
        pickupLocation: "Bến xe Miền Tây", 
        dropoffLocation: "Bến xe Miền Đông", 
        status: "completed", 
        completionTime: new Date("2024-03-28 11:00:00"),
        distance: 8.5, 
        driverRating: 4,
        customerId: 4, 
        driverId: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 5,
        requestTime: new Date("2024-03-29 14:00:00"),
        pickupLocation: "Trung tâm thương mại Vincom Center", 
        dropoffLocation: "Nhà hát Thành phố", 
        status: "processing", 
        completionTime: null, 
        distance: 3.5, 
        driverRating: null,
        customerId: 5, 
        driverId: 5, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 6,
        requestTime: new Date("2024-03-30 18:00:00"), 
        pickupLocation: "Phú Mỹ Hưng", 
        dropoffLocation: "Khu du lịch Suối Tiên", 
        status: "completed", 
        completionTime: null, 
        distance: 15.0, 
        driverRating: null, 
        customerId: 6, 
        driverId:  6, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 7,
        requestTime: new Date("2024-03-31 11:00:00"), 
        pickupLocation: "Sân bay Tân Sơn Nhất", 
        dropoffLocation: "Vũng Tàu", 
        status: "completed",
        completionTime: new Date("2024-03-31 15:00:00"), 
        distance: 120.0, 
        driverRating: 5, 
        customerId: 7, 
        driverId: 7, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 8,
        requestTime: new Date("2024-03-31 11:00:00"), 
        pickupLocation: "Bình Thạnh", 
        dropoffLocation: "Thủ Đức",
        status: "completed", 
        completionTime: new Date("2024-03-31 15:00:00"), 
        distance: 120.0, 
        driverRating: 5, 
        customerId: 8, 
        driverId: 8, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 9,
        requestTime: new Date("2024-04-02 19:00:00"), 
        pickupLocation: "Quận 1", 
        dropoffLocation: "Quận 7", 
        status: "processing", 
        completionTime: null, 
        distance: 7.0, 
        driverRating: null, 
        customerId: 9, 
        driverId: 9, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestId: 10,
        requestTime: new Date("2024-04-03 12:00:00"),
        pickupLocation: "Gò Vấp", 
        dropoffLocation: "Tân Bình",
        status: "completed", 
        completionTime: null, 
        distance: 4.5, 
        driverRating: null, 
        customerId: 10, 
        driverId: 10, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];
    
    await queryInterface.bulkInsert('RideRequests', rideRequests, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RideRequests', null, {});
  }
};
