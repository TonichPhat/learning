const JWT = require('jsonwebtoken');
const { jwt: jwtConfig } = require('@/config/app.config');

exports.generateAccessToken = (payload, option = {}) => {
  const alg = option.alg || jwtConfig.alg;
  const type = option.type || jwtConfig.type;
  const expiresIn = option.expiresIn || jwtConfig.expiresIn;
};
