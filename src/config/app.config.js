module.exports = {
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    db: process.env.REDIS_DB,
  },
  jwt: {
    alg: process.env.JWT_ALG,
    type: process.env.JWT_TYPE,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
};
