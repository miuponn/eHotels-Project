const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Brian3!08",
    host: "localhost",
    port: 5432,
    database: "Brotels"
});

module.exports = pool;