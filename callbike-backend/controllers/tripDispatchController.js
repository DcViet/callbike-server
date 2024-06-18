// controllers/tripDispatchController.js

'use strict';

const rabbitMQService = require('../services/rabbitMQService');
// const driverService = require('../services/driverService');

let requests = {}; // Để lưu trạng thái yêu cầu tạm thời

// Endpoint để nhận yêu cầu đặt xe
exports.requestRide = async (req, res) => {
  try {
    const request = req.body;
    const requestId = `${request.customer_id}-${Date.now()}`;
    request.id = requestId;

    requests[requestId] = { status: 'pending', result: null };

    await rabbitMQService.publishRequest(request);
    res.send({ success: true, message: 'Ride request received', requestId });
  } catch (error) {
    console.error('Error requesting ride:', error);
    res.status(500).send({ success: false, message: 'Error requesting ride' });
  }
};

// Endpoint để kiểm tra trạng thái yêu cầu (dùng cho polling)
exports.getRequestStatus = (req, res) => {
  try {
    const requestId = req.params.id;
    const requestInfo = requests[requestId];

    if (!requestInfo) {
      return res.status(404).send({ success: false, message: 'Request not found' });
    }

    res.send({ success: true, requestInfo });
  } catch (error) {
    console.error('Error getting request status:', error);
    res.status(500).send({ success: false, message: 'Error getting request status' });
  }
};

