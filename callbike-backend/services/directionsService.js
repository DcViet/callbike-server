// services/directionsService.js

const getDirections = async (origin, destination) => {
  try {
    // Sử dụng dynamic import() để import node-fetch
    const fetch = await import('node-fetch');
    
    const response = await fetch.default(`http://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`);
    const json = await response.json();
    const points = json.routes[0].geometry.coordinates.map(point => ({
      latitude: point[1],
      longitude: point[0],
    }));
    return {
      route: json.routes[0],
      coordinates: points,
      distance: json.routes[0].distance
    };
  } catch (error) {
    console.error('Lỗi khi lấy thông tin hướng đi:', error);
    throw new Error('Không thể lấy thông tin hướng đi');
  }
};

module.exports = {
  getDirections
};

