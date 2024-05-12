const { expressjwt: jwt } = require('express-jwt');
const _ = require('lodash');
const config = require('../config');
const utils = require('../utils');

const unlessPaths = ['/api/users', '/api/users/verify-username-email', '/api/users/forgot_password'];

exports.authentication = jwt({
  secret: config.get('jwt.secret'),
  algorithms: ['HS256'],
  getToken: function fromHeaderOrQuerystring(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    } if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  },
}).unless({ path: unlessPaths });

exports.authenticationCallback = (err, req, res, next) => {
  if (err) {
    let name = 'TOKEN_INVALIDO';
    if (_.has(err, 'inner.name')) {
      if (err.inner.name === 'TokenExpiredError') {
        name = 'TOKEN_EXPIRADO';
      }
    }
    return utils.errorResponse(res, name, {});
  }
  next();
};
