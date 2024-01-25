const { Sequelize, QueryTypes, Op } = require('sequelize');
const cls = require('cls-hooked');
const namespace = cls.createNamespace('postgres');
const dbConfig = require('../../../config/db.config');
const path = require('path');
const fs = require('fs/promises');
const stringTemplate = require('string-template');
Sequelize.useCLS(namespace);

const sequelize = new Sequelize({ ...dbConfig });

const User = require('./user.model')(sequelize);
const Profile = require('./profile.model')(sequelize);

const db = {
  authenticate: () => {
    sequelize
      .authenticate()
      .then(() => console.log('DATABASE: Connection has been established successfully.'))
      .catch((err) => {
        console.error('DATABASE: Unable to connect to the database:', err);
        process.exit(0);
      });
  },

  /**
   * @param {string} sqlFile
   * @param {*} options
   */
  query: async (sqlFile, options = {}) => {
    const opts = { type: QueryTypes.SELECT, raw: true, ...options };
    const { substitution = {} } = opts;
    if (sqlFile.endsWith('.sql')) {
      const sqlPath = path.resolve(path.join('src/data/postgres/sql', sqlFile));
      const sql = await fs.readFile(sqlPath, { encoding: 'utf-8' });
      return sequelize.query(stringTemplate(sql, substitution), opts);
    }
  },
  sequelize,
  QueryTypes,
  Op,
  User,
  Profile,
};

Object.keys(db).forEach((modelName) => {
  if (!['authenticate', 'query', 'Op', 'sequelize', 'QueryTypes'].includes(modelName) && db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
