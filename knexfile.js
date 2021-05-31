require("dotenv").config();

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/mydb.sqlite",
    },
    migrations: {
      directory: "./src/database/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
    useNullAsDefault: true,
  },
};
