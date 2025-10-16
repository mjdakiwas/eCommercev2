import express from 'express';
import path from 'path';
import cors from 'cors';
import pool from './utils/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// [LATER] Finish serving up the path
// app.use(express.static(path.join(__dirname, '../client/')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/src/index.html'));
// });

app.get('/api/products', async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM products`);
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.json({ error: 'Error fetching from database' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
