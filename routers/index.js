const express = require('express');
const { register, login, authenticateToken } = require('../controller/user');
const { index, pesan, createPesan, protected, pesanId, pesanDelete, pesanUpdate, searchPesan } = require('../controller/pesan');

const router = express.Router();

// Registration route to create a new user
router.post('/user/register', register);
router.post('/user/login', login);

router.post('/pesan', createPesan);
router.get('/pesan', pesan);
router.get('/pesan/search/:tomsg', searchPesan);
router.get('/pesan/:id', pesanId);
router.put('/pesan/:id', authenticateToken, pesanUpdate);
router.delete('/pesan/:id', authenticateToken, pesanDelete);

router.get('/test', authenticateToken, protected)
router.get('/', index);

module.exports = { router };