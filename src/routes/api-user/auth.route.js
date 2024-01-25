const express = require('express');
const router = express.Router();
const authController = require('@app/auth/auth.controller');
const authDto = require('@app/auth/auth.dto');

router.post('/auth/login', authDto.userLoginDto, authController.userLogin);

module.exports = router;
