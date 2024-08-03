const express = require('express')

const router = express.Router();

const API = require('../controllers/userController')

router.get('/get', API.getUser)
router.post('/register-client', API.createUser)

module.exports = router