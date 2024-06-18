// services/rabbitMQService.js

const amqp = require('amqplib');
const driverService = require('../services/driverService');

let connection = null;
let channel = null;

// Hàm khởi tạo kết nối và kênh
const initialize = async () => {
  if (!connection) {
    connection = await amqp.connect('amqp://localhost');
  }
  if (!channel) {
    channel = await connection.createChannel();
  }
};

// Hàm gửi yêu cầu đến RabbitMQ
exports.publishRequest = async (request) => {
  try {
    await initialize();

    const queue = 'ride_requests';
    await channel.assertQueue(queue, { durable: false });

    console.log('[x] Sent', JSON.stringify(request));
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(request)));
  } catch (error) {
    console.error('Lỗi khi gửi tin nhắn:', error);
  }
};

// Hàm tiêu thụ tin nhắn từ RabbitMQ
exports.consume = async (callback) => {
  try {
    await initialize();

    const queue = 'ride_requests';
    await channel.assertQueue(queue, { durable: false });

    channel.consume(queue, async (msg) => {
      if (msg !== null) {
        try {
          const request = JSON.parse(msg.content.toString());
          console.log('Nhận yêu cầu:', request);

          // Gọi driverService.findDriver để tìm tài xế phù hợp
          const driver = await driverService.findDriver(request);

          const result = { customer_id: request.customer_id, driver: driver, request: request };

          // Cập nhật trạng thái yêu cầu trong `requests`
          requests[request.id] = { status: 'completed', result: result };

          // Gửi thông tin tới client WebSocket
          const clients = require('express')().locals.clients;
          clients.forEach(client => {
            if (client.id === result.customer_id) {
              client.ws.send(JSON.stringify(result));
            }
          });

          // Xác nhận tin nhắn đã được xử lý
          channel.ack(msg);
        } catch (error) {
          console.error('Lỗi khi xử lý tin nhắn:', error);
          channel.reject(msg, false);
        }
      }
    }, { noAck: false });

    console.log(' [*] Đang chờ tin nhắn. Để thoát nhấn CTRL+C');
  } catch (error) {
    console.error('Lỗi khi tiêu thụ tin nhắn:', error);
  }
};

exports.consumeRequests = exports.consume;
