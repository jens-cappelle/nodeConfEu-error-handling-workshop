/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
const { UserFacingError } = require('./baseError');

class BadRequestError extends UserFacingError {
  get statusCode() {
    return 400;
  }
}

class NotFoundError extends UserFacingError {
  get statusCode() {
    return 404;
  }
}

module.exports = {
  BadRequestError,
  NotFoundError,
};
