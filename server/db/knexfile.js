const path = require('path');
const dotenv = require('dotenv');
const _ = require('lodash');

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});
console.log("======>",process.env.DATABASE_URL)
module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  // connection: {
  //   user: "testuser",
  //   host: "localhost",
  //   database: "patchwork",
  //   password: "password",
  //   port: 5432,
  // },
  migrations: {
    tableName: 'migration',
    directory: path.join(__dirname, 'migrations'),
  },
  seeds: {
    directory: path.join(__dirname, 'seeds'),
  },
  wrapIdentifier: (value, origImpl) => origImpl(_.snakeCase(value)),
};
