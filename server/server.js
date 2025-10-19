import express from 'express';
import path from 'path';
import cors from 'cors';
import pool from './utils/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
};
app.use(cors(corsOptions));

app.get('/api/products', async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM products`);
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.json({ error: 'Error fetching from database' });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
