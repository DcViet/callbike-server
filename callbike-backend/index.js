const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const port = process.env.PORT || 4000;
const HOST = '192.168.1.6';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Kích hoạt consumer khi máy chủ khởi động
const rabbitMQService = require('./services/rabbitMQService');
rabbitMQService.consumeRequests().catch(error => {
  console.error('Error starting RabbitMQ consumer:', error);
});

// Thêm route cho các yêu cầu tới /api
app.use('/api', require('./routes/indexRouter'));
app.use('/api/user', require('./routes/usersRouter'));
app.use('/api/customer', require('./routes/customerRouter'));

app.use('/api/driver', require('./routes/driverRouter'));
app.use('/api/ride', require('./routes/rideRouter'));
app.use('/api/trip', require('./routes/tripRecordRouter'));

app.use('/api', require('./routes/tripDispatchRouter'));
app.use('/api', require('./routes/directionRouter'));
app.use('/api', require('./routes/authRouter'));

// Khi có kết nối mới từ client tới WebSocket server
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send(JSON.stringify({  }));
});

// Middleware để xử lý lỗi 404
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

// Khởi động server
server.listen(port, HOST, () => {
  console.log(`Server is running on http://${HOST}:${port}`);
});
