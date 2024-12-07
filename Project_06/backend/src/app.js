const express = require('express');
const cors = require('cors');  // Thêm thư viện CORS
const customersRoute = require('./routes/customers');
const roomsRoute = require('./routes/rooms');
const servicesRoute = require('./routes/services');
const bookingsRoute = require('./routes/bookings');
const serviceDetailsRoute = require('./routes/serviceDetails');

const app = express();

// Cấu hình CORS để cho phép yêu cầu từ các nguồn khác (client và server trên các cổng khác nhau)
app.use(cors());

// Middleware để xử lý JSON
app.use(express.json());

// Sử dụng các route đã tách
app.use('/api', customersRoute);
app.use('/api', roomsRoute);
app.use('/api', servicesRoute);
app.use('/api', bookingsRoute);
app.use('/api', serviceDetailsRoute);

module.exports = app;
