// Lớp đối tượng cho bản đồ của Google
class GoogleMap {
    constructor(mapElementId, options) {
        this.mapElementId = mapElementId;
        this.map = null;
        this.options = options || {};

        // Khởi tạo bản đồ của Google Maps
        this.initMap();
    }

    initMap() {
        // Tạo bản đồ với các tùy chọn được cung cấp
        this.map = new google.maps.Map(document.getElementById(this.mapElementId), this.options);
    }

    // Phương thức để thiết lập trung tâm của bản đồ
    setCenter(latlng) {
        this.map.setCenter(latlng);
    }

    // Phương thức để thiết lập mức độ phóng to của bản đồ
    setZoom(zoom) {
        this.map.setZoom(zoom);
    }
}

export { GoogleMap };
