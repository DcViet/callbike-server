// controllers/directionsController.js
const directionsService = require('../services/directionsService');

const getDirections = async (req, res) => {
  const { origin, destination } = req.body;

  if (!origin || !destination) {
    return res.status(400).send({ error: 'Origin and destination are required' });
  }

  try {
    const directions = await directionsService.getDirections(origin, destination);
    res.send(directions);
  } catch (error) {
    console.error('Error in controller:', error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getDirections
};
