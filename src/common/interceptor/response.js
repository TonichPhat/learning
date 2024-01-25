module.exports = async (req, res, next) => {
  res.success = (data = {}, status = 200) => {
    const responseData = typeof data === 'string' ? { message: data } : data;
    responseData.message = responseData.message || 'OK';
    responseData.data = responseData.data || null;
    responseData.metadata = responseData.metadata || null;
    responseData.error = null;
    res.status(status).json(responseData);
  };

  res.xlsx = (buffer, fileName) => {
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.end(buffer, 'binary');
  };

  res.fail = (data = {}, status = 400) => {
    const responseData = typeof data === 'string' ? { message: data } : data;
    responseData.message = responseData.message || 'Bad Request';
    responseData.data = responseData.data || null;
    responseData.metadata = responseData.metadata || null;
    responseData.error = data.error || null;
    responseData.exception = data.exception || 'BadRequest';
    res.status(status).json(responseData);
  };

  await next();
};
