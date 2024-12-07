const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000 || 5000;

app.listen(PORT, () => {
    console.log(`Server chạy trên cổng ${PORT}`);
    console.log('API có thể truy cập tại: http://localhost:3000/api/');
});