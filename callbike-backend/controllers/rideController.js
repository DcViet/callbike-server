//controllers/rideController.js
const rabbitMQService = require('../services/rabbitMQService');
const driverService = require('../services/driverService');

let requests = {}; // Để lưu trạng thái yêu cầu tạm thời

// Endpoint để nhận yêu cầu đặt xe
exports.requestRide = async (req, res) => {
  const request = req.body;
  const requestId = `${request.customer_id}-${Date.now()}`;
  request.id = requestId;

  requests[requestId] = { status: 'pending', result: null };

  await rabbitMQService.publishRequest(request);
  res.send({ success: true, message: 'Ride request received', requestId });
};

// Endpoint để kiểm tra trạng thái yêu cầu (dùng cho polling)
exports.getRequestStatus = (req, res) => {
  const requestId = req.params.id;
  const requestInfo = requests[requestId];

  if (!requestInfo) {
    return res.status(404).send({ success: false, message: 'Request not found' });
  }

  res.send({ success: true, requestInfo });
};

// Hàm tiêu thụ yêu cầu từ RabbitMQ và gửi kết quả qua WebSocket
exports.consumeRequests = async () => {
  await rabbitMQService.consume(async (msg) => {
    const request = JSON.parse(msg.content.toString());
    const driver = await driverService.findDriver(request);

    const result = { customer_id: request.customer_id, driver: driver, request: request };

    // Cập nhật trạng thái yêu cầu
    requests[request.id] = { status: 'completed', result: result };

    // Gửi thông tin tới WebSocket client
    const clients = require('express')().locals.clients;
    clients.forEach(client => {
      if (client.id === result.customer_id) {
        client.ws.send(JSON.stringify(result));
      }
    });
  });
};
