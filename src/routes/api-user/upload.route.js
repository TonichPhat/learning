const express = require('express');
const router = express.Router();
const { uploadSingleImage } = require('@common/helper/multer');
const uploadController = require('@app/upload/upload.controller');

router.post('/upload/image', uploadSingleImage, uploadController.uploadSingleImage);

module.exports = router;
