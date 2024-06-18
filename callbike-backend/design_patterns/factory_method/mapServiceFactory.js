import { GoogleMapsService, OpenStreetService } from "./MapService";
// Factory Method cho dịch vụ bản đồ
class MapServiceFactory {
    static createMapService(type) {
        switch (type) {
            case 'GoogleMaps':
                return new GoogleMapsService();
            case 'OpenStreet':
                return new OpenStreetService();
            default:
                throw new Error('Invalid map service type.');
        }
    }
}

export { MapServiceFactory };