exports.uploadSingleImage = async (req, res, next) => {
  try {
    if (!req.file) return res.fail({ error: { file: 'file is required!' }, message: 'file is missing!' });
    const { originalname: name, mimetype, size, filename: key } = req.file;
    return res.success({ data: { name, mimetype, size, key } });
  } catch (e) {
    return next(e);
  }
};
