// errorHandler.js
const { GeneralError, BadRequest, Unauthorized, NotFound, Forbidden, Conflict, InternalServerError } = require('../utils/error');

const errorHandler = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({ error: err.message });
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  if (err.name === 'MongoError' && err.code === 11000) {
    return res.status(400).json({ error: 'Duplicate key error' });
  }

  if (err instanceof SyntaxError) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  return res.status(500).json({ error: 'Internal Server Error' });
};

const notFoundHandler = (req, res, next) => {
  throw new NotFound('Resource not found');
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
