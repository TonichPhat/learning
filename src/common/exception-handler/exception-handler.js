const { HttpException } = require('@common/exception/http.exception');

exports.exceptionHandler = (err, req, res, next) => {
  try {
    let error = {};
    let message = 'Bad Request';
    let status = 400;
    let exception = err?.exception || null;
    if (err instanceof HttpException) {
      status = err?.status || status;
      message = err?.message || message;
    }
    return res.fail({ message, error, exception, metadata: err?.metadata }, status);
  } catch (e) {
    console.log(e.message);
  }
};
