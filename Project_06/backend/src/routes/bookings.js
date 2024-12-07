const express = require('express');
const sql = require('mssql');
const { poolPromise } = require('../database');
const router = express.Router();

// Lấy danh sách tất cả đặt phòng
router.get('/bookings', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM DAT_PHONG');
        res.json(result.recordset);
    } catch (err) {
        console.error('Lỗi khi lấy dữ liệu:', err);
        res.status(500).send('Lỗi server');
    }
});

// Thêm đặt phòng mới
router.post('/bookings', async (req, res) => {
    const { khachHangId, phongId, ngayDat, thoiGian } = req.body;
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('khachHangId', sql.Int, khachHangId)
            .input('phongId', sql.Int, phongId)
            .input('ngayDat', sql.Date, ngayDat)
            .input('thoiGian', sql.Time, thoiGian)
            .query('INSERT INTO DAT_PHONG (khachHangId, phongId, ngayDat, thoiGian) VALUES (@khachHangId, @phongId, @ngayDat, @thoiGian)');
        res.status(201).send('Đặt phòng thành công');
    } catch (err) {
        console.error('Lỗi khi thêm đặt phòng:', err);
        res.status(500).send('Lỗi server');
    }
});

module.exports = router;