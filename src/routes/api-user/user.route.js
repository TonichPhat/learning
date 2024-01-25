const express = require('express');
const router = express.Router();
const userController = require('@/app/account/user.controller');
const userDto = require('@/app/account/user.dto');

router.post('/users', userDto.createOneUserDto, userController.createOneUser);
router.get('/users', userController.findAndCountAllUser);

module.exports = router;
