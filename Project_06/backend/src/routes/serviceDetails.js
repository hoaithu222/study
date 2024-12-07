const express = require('express');
const { poolPromise } = require('../database');
const router = express.Router();

router.get('/service-details', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM CHI_TIET_SU_DUNG_DV');
        res.json(result.recordset);
    } catch (err) {
        console.error('Lỗi khi lấy dữ liệu:', err);
        res.status(500).send('Lỗi server');
    }
});

module.exports = router;