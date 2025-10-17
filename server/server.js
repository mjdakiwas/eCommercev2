import express from 'express';
import path from 'path';
import cors from 'cors';
import pool from './utils/db.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/api/products', async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM products`);
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.json({ error: 'Error fetching from database' });
    }
});

// app.get('/*splat', (req, res) => {
//     console.log('Successfully connected to the server');
//     res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
