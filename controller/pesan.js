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

const searchPesan = async (req, res) => {
    try {
      const [[search]] = await pool.query(`SELECT * FROM message WHERE to_msg LIKE '%${[req.params.tomsg]}%'`);
      if (!search) {
        return res.status(404).json({ error: 'Message not found' });
      }
      res.json(search);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching message' });
    }
}

const pesanId = async (req, res) => {
    try {
      const [[rows]] = await pool.query('SELECT * FROM message WHERE id_msg = ?', [req.params.id]);
      if (!rows) {
        return res.status(404).json({ error: 'Message not found' });
      }
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching message' });
    }
  }

const pesanDelete = async (req, res) => {
    try {
      if (req.user.status !== "superadmin") {
        return res.status(403).json({ error: 'Access denied' });
      }
      const rows = await pool.query('DELETE FROM message WHERE id_msg = ?', [req.params.id]);
      if (rows) {
        res.json({ message: 'Message deleted successfully' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching message' });
    }
  }

const createPesan = async (req, res) => {
    const { tomsg, msg } = req.body;
    if (tomsg && msg) {
        try {
            const result = await pool.query('INSERT INTO message (to_msg, msg, date_msg) VALUES (?, ?, ?)', [tomsg, msg, formattedDate]);
            res.status(201).json({ data: { id: result[0].insertId, tomsg, msg, date_msg: formattedDate }, message: 'pesan dibuat', userId: result[0].insertId });
        } catch (error) {
            res.status(500).json({ error: 'Error saving message' });
        }
    } else {
        res.status(400).json({ error: 'masukkan kepada siapa dikirim dan pesan.' });
    }
};

const pesanUpdate = async (req, res) => {
    const { tomsg, msg } = req.body;
    if (req.user.status !== "superadmin") {
        return res.status(403).json({ error: 'Access denied' });
    }
    if (tomsg && msg) {
        try {
            const [[rows]] = await pool.query('SELECT * FROM message WHERE id_msg = ?', [req.params.id]);
            if (!rows) {
                return res.status(404).json({ error: 'Message not found' });
            }
            const result = await pool.query('UPDATE message SET to_msg = ?, msg = ?, date_msg = ? WHERE id_msg = ?', [tomsg, msg, formattedDate, req.params.id]);
            if (result) {
                res.json({ message: 'pesan diupdate', userId: req.params.id });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error updating message' });
        }
    } else {
        res.status(400).json({ error: 'masukkan kepada siapa dikirim dan pesan.' });
    }
};

const protected = async (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
} 

module.exports = { pesan, createPesan, protected, index, pesanId, pesanDelete, pesanUpdate, searchPesan };