
class Driver {
    constructor(builder) {
        // Khởi tạo các biến cần thiết cho dịch vụ tài xế
        this.driverId = builder.driverId;
        this.name = builder.name;
        this.phoneNumber = builder.phoneNumber;
        this.currentLocation = builder.currentLocation;
        this.workStatus = builder.workStatus;

    }

    getNearbyDrivers(passengerLocation) {
        // Triển khai để tìm các tài xế gần đây dựa trên vị trí của hành khách
    }
}

module.exports = Driver
