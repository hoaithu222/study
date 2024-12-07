const mysql = require('mysql2');





// Thiết lập cấu hình kết nối
const connection = mysql.createConnection({
  host: 'localhost',      // Địa chỉ máy chủ MySQL
  user: 'root',           // Tên người dùng MySQL
  password: '123456',   // Mật khẩu MySQL
  database: 'QLSV' // Tên cơ sở dữ liệu
});

// Kết nối tới MySQL
connection.connect((error) => {
  if (error) {
    return console.error('Kết nối thất bại: ', error.message);
  }
  console.log('Kết nối MySQL thành công!');
});

// Thực hiện một truy vấn đơn giản
connection.query('SELECT * FROM SinhVien', (error, results, fields) => {
  if (error) throw error;
  console.log('Kết quả truy vấn:', results);
});

// Đóng kết nối
connection.end();