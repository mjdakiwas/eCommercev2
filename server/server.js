import express from 'express';
import path from 'path';
import cors from 'cors';
import pool from './utils/db.js';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
};
app.use(cors(corsOptions));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/products', async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM products`);
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.json({ error: 'Error fetching from database' });
    }
});

app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
