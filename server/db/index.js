const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DATABASE_URL || "localhost",
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};
