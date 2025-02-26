import { Client } from "pg";
import fs from "fs";

// Function to read the content of secret files
function readSecretFile(filePath:string) {
  try {
    return fs.readFileSync(filePath, 'utf8').trim();
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

// Read secrets from files based on environment variables
const dbUser = process.env.DATABASE_USERNAME_FILE ? 
  readSecretFile(process.env.DATABASE_USERNAME_FILE) : 
  process.env.DATABASE_USERNAME;

const dbPassword = process.env.DATABASE_PASSWORD_FILE ? 
  readSecretFile(process.env.DATABASE_PASSWORD_FILE) : 
  process.env.DATABASE_PASSWORD;

const dbName = process.env.DATABASE_NAME_FILE ? 
  readSecretFile(process.env.DATABASE_NAME_FILE) : 
  process.env.DATABASE_NAME;


const dbHost = process.env.DATABASE_HOST_FILE ? 
readSecretFile(process.env.DATABASE_HOST_FILE) : 
process.env.DATABASE_HOST;

// Create client with the file contents
const client = new Client({
  host: "db",
  port: parseInt(process.env.DATABASE_PORT || "5432"),
  user: dbUser!,
  password: dbPassword!,
  database: dbName!,
});

// console.log("Database connection configuration:");
// console.log(`Host: ${process.env.DATABASE_HOST}`);
// console.log(`Port: ${process.env.DATABASE_PORT}`);
// console.log(`User: ${dbUser ? "[SET]" : "[NOT SET]"}`);
// console.log(`Password: ${dbPassword ? "[SET]" : "[NOT SET]"}`);
// console.log(`Database: ${dbName ? "[SET]" : "[NOT SET]"}`);

try {
  client.connect();
  console.log("Connected to PostgreSQL successfully");
} catch (error) {
  console.error("Error connecting to PostgreSQL:", error);
}

export default client;