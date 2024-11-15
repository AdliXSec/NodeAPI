const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'stockvaksin'
});

app.get('/', (req, res) => {
  res.send('Welcome to my API connected to MySQL!');
});

app.get('/api/stok', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM stok');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching stok' });
  }
});

app.post('/api/stok', async (req, res) => {
  const { uidstok, namastok, stok } = req.body;
  if (uidstok && namastok && stok) {
    try {
      const result = await pool.query('INSERT INTO stok (uid_stok, nama_stok, stok) VALUES (?, ?, ?)', [uidstok, namastok, stok]);
      res.status(201).json({ message: 'User created', userId: result[0].insertId });
    } catch (error) {
      res.status(500).json({ error: 'Error saving user' });
    }
  } else {
    res.status(400).json({ error: 'Please provide both name and age.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
