const {pool} = require('../config/config');
const moment = require('moment');

const formattedDate = moment().format('YYYY-MM-DD HH:mm:ss');

const index = (req, res) => {
    res.send('Welcome to my API connected to MySQL!');
  }

const pesan = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM message');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching message' });
    }
  }

const createPesan = async (req, res) => {
    const { tomsg, msg } = req.body;
    if (tomsg && msg) {
        try {
            const result = await pool.query('INSERT INTO message (to_msg, msg, date_msg) VALUES (?, ?, ?)', [tomsg, msg, formattedDate]);
            res.status(201).json({ message: 'pesan dibuat', userId: result[0].insertId });
        } catch (error) {
            res.status(500).json({ error: 'Error saving message' });
        }
    } else {
        res.status(400).json({ error: 'masukkan kepada siapa dikirim dan pesan.' });
    }
};

const protected = async (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
} 

module.exports = { pesan, createPesan, protected, index };