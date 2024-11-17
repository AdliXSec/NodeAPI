const express = require('express');
const { register, login, authenticateToken } = require('../controller/user');
const { index, pesan, createPesan, protected } = require('../controller/pesan');

const router = express.Router();

// Registration route to create a new user
router.post('/user/register', register);
router.post('/user/login', login);
router.post('/pesan', createPesan);
router.get('/pesan', pesan);
router.get('/test', authenticateToken, protected)
router.get('/', index);

module.exports = { router };