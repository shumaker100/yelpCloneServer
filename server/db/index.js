const { Pool } = require("pg");

const devConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
};

const proConfig = process.env.DATABASE_URL;
const pool =
  process.env.NODE_ENV == "production"
    ? new Pool({ connectionString: proConfig })
    : new Pool();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
