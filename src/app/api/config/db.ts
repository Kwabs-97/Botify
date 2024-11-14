import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  port: 5433,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
});

export default pool;
