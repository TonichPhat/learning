const multer = require('multer');
const { join, extname } = require('path');
const fileSize = Object.freeze({
  image: 5 * 1024 * 1024,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, join(__dirname, '../../../public/temp'));
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date().getTime()}${extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG and PNG files are allowed!'), false);
  }
};

exports.upload = multer({ storage });
exports.uploadSingleImage = multer({ storage, limits: { fileSize: fileSize.image }, fileFilter }).single('file');
