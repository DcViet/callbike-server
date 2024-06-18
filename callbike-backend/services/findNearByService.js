// services/findNearByService.js

const getDistance = async (origin, destination) => {
  try {
    const fetch = await import('node-fetch').then(module => module.default);

    const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`);
    const json = await response.json();

    if (json.code === 'Ok' && json.routes && json.routes.length > 0) {
      const route = json.routes[0];
      const points = route.geometry.coordinates.map(point => ({
        latitude: point[1],
        longitude: point[0],
      }));
      return {
        distance: route.distance
      };
    } else {
      throw new Error('OSRM did not return a valid response');
    }
  } catch (error) {
    console.error('Error fetching route:', error);
    throw new Error('Failed to fetch route from OSRM');
  }
};

module.exports = {
  getDistance
};
