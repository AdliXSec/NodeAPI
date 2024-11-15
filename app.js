const express = require('express');
const mysql = require('mysql2/promise');
const moment = require('moment');
const formattedDate = moment().format('DD-MM-YYYY');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'anonchat'
});

app.get('/', (req, res) => {
  res.send('Welcome to my API connected to MySQL!');
});

app.get('/api/pesan', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM message');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching stok' });
  }
});

app.post('/api/pesan', async (req, res) => {
  const { tomsg, msg } = req.body;
  if (tomsg && msg) {
    try {
      const result = await pool.query('INSERT INTO message (to_msg, msg, date_msg) VALUES (?, ?, ?)', [tomsg, msg, formattedDate]);
      res.status(201).json({ message: 'pesan dibuat', userId: result[0].insertId });
    } catch (error) {
      res.status(500).json({ error: 'Error saving user' });
    }
  } else {
    res.status(400).json({ error: 'masukkan kepada siapa dikirim dan pesan.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
