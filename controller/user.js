const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require('../config/config');

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

const register = async (req, res) => {
    const { usermail, username, password } = req.body;
    if (!usermail || !username || !password) {
      return res.status(400).json({ error: 'Please provide both username and password.' });
    }
  
    try {
      // Check if the user already exists
      const [existingUser] = await pool.query('SELECT * FROM users WHERE usermail = ?', [usermail]);
      if (existingUser.length > 0) {
        return res.status(400).json({ error: 'email already taken.' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert the new user into the database
      await pool.query('INSERT INTO users (usermail, username, password) VALUES (?, ?, ?)', [usermail, username, hashedPassword]);
  
      res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Error during registration' });
    }
  }

const login = async (req, res) => {
    const { usermail, password } = req.body;
    if (!usermail || !password) {
        return res.status(400).json({ error: 'Please provide both usermail and password.' });
    }
      
    try {
        const [users] = await pool.query('SELECT * FROM users WHERE usermail = ?', [usermail]);
        if (users.length === 0) {
            return res.status(401).json({ error: 'Invalid usermail or password.' });
        }
    
        const user = users[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid usermail or password.' });
        }
    
        // Generate a JWT
        const token = jwt.sign({ id: user.id, usermail: user.usermail, username: user.username, status: user.status }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: 'Error during login' });
    }
}

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

module.exports = { register, login, authenticateToken };