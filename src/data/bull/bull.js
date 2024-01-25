const { redis: redisConfig } = require('@config/app.config');
const Redis = require('ioredis');
const redisConnection = {
  host: redisConfig.host,
  port: redisConfig.port,
  db: redisConfig.db,
};

const client = new Redis({ ...redisConnection, maxRetriesPerRequest: null, enableReadyCheck: false });
const subscriber = new Redis({ ...redisConnection, maxRetriesPerRequest: null, enableReadyCheck: false });

function createClient(type) {
  switch (type) {
    case 'client':
      return client;
    case 'subscriber':
      return subscriber;
    case 'bclient':
      return new Redis(redisConnection, { maxRetriesPerRequest: null, enableReadyCheck: false });
    default:
      throw new Error('Invalid type', type);
  }
}

module.exports = { createClient };
