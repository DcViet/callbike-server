// driverService.js
class DriverService {
    constructor() {
        if (!DriverService.instance) {
            this.driverId = null;
            DriverService.instance = this;
        }
        return DriverService.instance;
    }

    setDriverId(driverId) {
        this.driverId = driverId;
    }

    getDriverId() {
        return this.driverId;
    }
}

const driverService = new DriverService();
module.exports = driverService;
