import { GoogleMap } from "./googleMap";
import { OpenStreetMap } from "./openStreetMap";

// Interface cho các dịch vụ bản đồ
class MapService {
    constructor() {
        if (this.constructor === MapService) {
            throw new TypeError('Abstract class "MapService" cannot be instantiated directly.');
        }
    }

    // Phương thức trừu tượng để tạo một bản đồ mới
    createMap() {
        throw new Error('Method "createMap" must be implemented.');
    }

    // Phương thức trừu tượng để lấy thông tin tọa độ từ bản đồ
    getCoordinates() {
        throw new Error('Method "getCoordinates" must be implemented.');
    }
}

// Lớp triển khai cho dịch vụ Google Maps
class GoogleMapsService extends MapService {
    createMap() {
        return new GoogleMap();
    }

    getCoordinates(latitude, longitude) {
        // Triển khai lấy thông tin tọa độ từ bản đồ của Google Maps
        return { latitude, longitude };
    };
}


// Lớp triển khai cho dịch vụ OpenStreet
class OpenStreetService extends MapService {
    createMap() {
        return new OpenStreetMap();
    }

    getCoordinates() {
        // Triển khai lấy thông tin tọa độ từ bản đồ của OpenStreet
        return {
            latitude: 0,
            longitude: 0
        };
    }
}

export { GoogleMapsService, OpenStreetService };