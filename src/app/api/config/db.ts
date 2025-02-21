import { Pool, Client } from "pg";

const client = new Client({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  port: 5432,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
});


try {
  client.connect()
  console.log("Connected to postgresql successfully")
} catch (error) {
  console.log("Error connecting to postgresql", error)
}


export default client;
