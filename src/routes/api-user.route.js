const express = require('express');
const router = express.Router();
const authRoute = require('./api-user/auth.route');
const userRoute = require('./api-user/user.route');
const uploadRoute = require('./api-user/upload.route');

router.use(authRoute).use(userRoute).use(uploadRoute);

module.exports = router;
