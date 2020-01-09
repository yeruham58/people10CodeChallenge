// db config
const Sequelize = require("sequelize");

//Passing parameters separately
module.exports = new Sequelize(
  "people10_code_challenge", //your db name
  "postgres", //Your db owner
  require("./keys").postgresPassword, //Your db password
  {
    host: "localhost",
    dialect: "postgres", //Your db type (Postgres/ MySql etc)
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);
