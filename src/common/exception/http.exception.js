const HttpStatus = Object.freeze({
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
});

class HttpException extends Error {
  constructor(error, status) {
    super();
    this.name = this.constructor.name;
    this.message = 'HttpException';
    this.status = status || 400;
    if (typeof error === 'string') {
      this.message = error;
    } else if (typeof error === 'object') {
      this.message = error.message || error;
      this.status = error.status || this.status;
      this.metadata = error.metadata || null;
      this.exception = error.exception || null;
    }
  }
}

class BadRequestException extends HttpException {
  constructor(error = 'Something went wrong!') {
    super(error, HttpStatus.BAD_REQUEST);
  }
}

module.exports = {
  HttpException,
  BadRequestException,
};
