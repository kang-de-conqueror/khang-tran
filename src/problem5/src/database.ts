import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "problem5",
  password: "postgresql",
  port: 5432,
});

pool.query(
  `
  CREATE TABLE IF NOT EXISTS resources (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT
  )
  `
);

export default pool;
