const axios = require('axios');
const findNearByService = require('./findNearByService');

exports.findDriver = async (rideRequest) => {
  try {
    // Gọi API để lấy danh sách tài xế
    const response = await axios.get('http://192.168.1.6:4000/api/driver/driverList');
    const drivers = response.data; 

    // Lấy vị trí của khách hàng từ yêu cầu đặt xe
    const customerLocation = rideRequest.pickup_location;

    console.log('Vị trí của Khách hàng:', customerLocation);
    console.log('Danh sách tài xế:', drivers);

    // Biến để lưu trữ thông tin của tài xế có khoảng cách ngắn nhất
    let nearestDriver = null;
    let minDistance = Infinity;

    // Tạo mảng các promise để tính khoảng cách từ khách hàng tới từng tài xế
    const distancePromises = drivers.map(async (driver) => {
      try {
        // Lấy ID và toạ độ của tài xế từ currentLocation
        const regex = /Tọa độ GPS: (-?\d+\.\d+), (-?\d+\.\d+)/;
        const match = driver.currentLocation.match(regex);

        if (match && match.length === 3) {
          const latitude = parseFloat(match[1]);
          const longitude = parseFloat(match[2]);

          const driverLocation = { latitude, longitude };

          console.log(`Đang tính khoảng cách tới Tài xế ${driver.name} - ID ${driver.driverId} tại vị trí:`, driverLocation);

          // Gọi API tính khoảng cách giữa khách hàng và tài xế
          const directions = await findNearByService.getDistance(customerLocation, driverLocation);

          const distance = directions.distance;
          console.log(`Khoảng cách đến Tài xế ${driver.name}:`, distance);

          // Tìm tài xế có khoảng cách ngắn nhất
          if (distance !== null && distance < minDistance) {
            minDistance = distance;
            nearestDriver = { driverId: driver.driverId, name: driver.name, distance };
          }

          return { driverId: driver.driverId, distance };
        } else {
          console.error(`Không thể lấy toạ độ từ chuỗi: ${driver.currentLocation}`);
          return null; // Loại bỏ tài xế không có toạ độ hợp lệ
        }
      } catch (error) {
        console.error(`Lỗi khi tính toán khoảng cách cho tài xế ${driver.name}:`, error);
        return null; // Loại bỏ tài xế nếu có lỗi xảy ra
      }
    });

    // Chờ cho tất cả các promise hoàn thành
    await Promise.all(distancePromises);

    // Kiểm tra nếu không tìm thấy tài xế nào phù hợp
    if (!nearestDriver) {
      console.log('Không tìm thấy tài xế nào phù hợp.');
      return null;
    }

    console.log('Tài xế gần nhất:', nearestDriver);
    console.log('Khoảng cách ngắn nhất:', minDistance);

    // Gửi thông tin tài xế có khoảng cách ngắn nhất qua WebSocket
    sendNearestDriverToClient(nearestDriver);
    
    return nearestDriver;
  } catch (error) {
    console.error('Lỗi khi tìm tài xế:', error);
    throw error;
  }
};
