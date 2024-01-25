require("dotenv").config();

module.exports = {
  host: process.env.APP_DB_HOST,
  port: process.env.APP_DB_PORT,
  username: process.env.APP_DB_USERNAME,
  password: process.env.APP_DB_PASSWORD,
  dialect: process.env.APP_DB_DIALECT,
  database: process.env.APP_DB_DATABASE,
  dialectOptions: {
    decimalNumbers: true,
    ssl: true,
  },
  seederStorage: "sequelize",
  logging:
    process.env.APP_ENABLE_LOG === "true" &&
    process.env.NODE_ENV !== "production"
      ? console.log
      : false,
};
