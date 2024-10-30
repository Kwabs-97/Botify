import pg from "pg";
import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  port: 5432,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
});

export default pool;
