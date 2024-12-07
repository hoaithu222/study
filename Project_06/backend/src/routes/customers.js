const express = require('express');
const { poolPromise } = require('../database');
const sql = require('mssql');
const router = express.Router();

router.get('/customers', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM KHACH_HANG');
        res.json(result.recordset);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Server Error');
    }
});

router.post('/customers', async (req, res) => {
    const { TenKh, diaChi, soDT } = req.body;

    if (!TenKh || !diaChi || !soDT) {
        return res.status(400).send('Thiếu thông tin khách hàng');
    }

    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT TOP 1 MaKH FROM KHACH_HANG ORDER BY MaKH DESC');
        let lastMaKh = result.recordset[0]?.MaKH || 'KH00';
        const numberPart = parseInt(lastMaKh.slice(2)) + 1;
        const newMaKh = `KH00${numberPart.toString().padStart(2, '0')}`;

        await pool.request()
            .input('maKh', sql.VarChar(10), newMaKh)
            .input('TenKh', sql.NVarChar(50), TenKh)
            .input('diaChi', sql.NVarChar(100), diaChi)
            .input('soDT', sql.VarChar(15), soDT)
            .query('INSERT INTO KHACH_HANG(MaKH, TenKH, DiaChi, soDT) VALUES (@maKh, @TenKh, @diaChi, @soDT)');

        res.status(201).send('Thêm khách hàng thành công');
    } catch (err) {
        console.error('Error adding customer:', err);
        res.status(500).send('Server Error');
    }
});

router.put('/customers/:maKh', async (req, res) => {
    const { maKh } = req.params;
    const { TenKh, diaChi, soDT } = req.body;

    if (!TenKh || !diaChi || !soDT) {
        return res.status(400).send('Thiếu thông tin khách hàng');
    }

    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('maKh', sql.VarChar(10), maKh)
            .input('TenKh', sql.NVarChar(50), TenKh)
            .input('diaChi', sql.NVarChar(100), diaChi)
            .input('soDT', sql.VarChar(15), soDT)
            .query('UPDATE KHACH_HANG SET TenKH = @TenKh, DiaChi = @diaChi, soDT = @soDT WHERE MaKH = @maKh');

        if (result.rowsAffected[0] === 0) {
            return res.status(404).send('Không tìm thấy khách hàng');
        }

        res.send('Cập nhật khách hàng thành công');
    } catch (err) {
        console.error('Error updating customer:', err);
        res.status(500).send('Server Error');
    }
});

router.delete('/customers/:maKh', async (req, res) => {
    const { maKh } = req.params;

    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('maKh', sql.VarChar(10), maKh)
            .query('DELETE FROM KHACH_HANG WHERE MaKH = @maKh');

        if (result.rowsAffected[0] === 0) {
            return res.status(404).send('Không tìm thấy khách hàng');
        }

        res.send('Xóa khách hàng thành công');
    } catch (err) {
        console.error('Error deleting customer:', err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;




