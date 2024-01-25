// const books = [
//   { title: 'C++', author: 'Bjarne' },
//   { title: 'Java', author: 'James' },
//   { title: 'Python', author: 'Guido' },
//   { title: 'Java', author: 'James' },
// ];

// const ids = books.map((x) => x.title);

// const filtered = books.filter((x, index) => {
//   return ids.indexOf(x.title) === index;
// });

// console.log(filtered);

// const object = {
//   1: 'Viset',
//   2: 'Visal',
//   3: 'Vichet',
// };

// const obj1 = Object.keys(object);
// const obj2 = Object.entries(object);
// // console.log(obj2);
// for (let i of obj1) {
//   console.log(i);
// }

// for (let i of obj2) {
//   console.log(i);
// }

// const durations = [1000, 2000, 3000];
// const promise = [];

// durations.map((x) => {
//   console.log(x);
//   promise.push(x);
// });

// console.log(promise);

///////////////////////////
// const { Op, DataTypes, Sequelize, QueryTypes } = require('sequelize');
// const dbConfig = {
//   host: 'ep-rapid-math-02654206.ap-southeast-1.aws.neon.tech',
//   port: 5432,
//   username: 'tonichphatsk',
//   password: 'lBIv5fp8kqgc',
//   dialect: 'postgres',
//   database: 'neondb',
// };

// const sequelize = new Sequelize({ ...dbConfig });

// const db = {
//   authenticate: () => {
//     sequelize
//       .authenticate()
//       .then(() => console.log('DATABASE: Connection has been established successfully.'))
//       .catch((err) => {
//         console.error('DATABASE: Unable to connect to the database:', err);
//         process.exit(0);
//       });
//   },

//   /**
//    * @param {string} sqlFile
//    * @param {import('sequelize').QueryOptionsWithType & { substitution: object }} options
//    * @returns
//    */
//   query: async (sqlFile, options = {}) => {
//     const opts = { type: QueryTypes.SELECT, raw: true, ...options };
//     const { substitution = {} } = options;
//     if (sqlFile.endsWith('.sql')) {
//       const sqlPath = path.resolve(path.join('src/data/postgres/queries', sqlFile));
//       const sql = await fs.readFile(sqlPath, { encoding: 'utf8' });
//       return sequelize.query(stringTemplate(sql, substitution), opts);
//     }
//     return sequelize.query(sqlFile, opts);
//   },
//   Op,
//   sequelize,
//   QueryTypes,
//   Sequelize,
// };

// Object.keys(db).forEach((k) => {
//   console.log(db[k].associate);
// });

const fs = require('fs/promises');
const path = require('path');

// (async () => {
//   const readFile = await fs.readFile(path.resolve(path.join('src/app/account', 'user.dto.js')), { encoding: 'utf8' });
//   console.log(readFile);
// })();

console.log(path.extname('hello.txt'));
