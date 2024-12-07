const express = require('express');
const { poolPromise } = require('../database');
const router = express.Router();

router.get('/rooms', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM PHONG');
        res.json(result.recordset);
    } catch (err) {
        console.error('Lỗi khi lấy dữ liệu:', err);
        res.status(500).send('Lỗi server');
    }
});

module.exports = router;