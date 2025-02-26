import { Client } from "pg";
import fs from "fs";

// Function to read the content of secret files
function readSecretFile(filePath: string) {
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
  host: dbHost!,
  port: 5432, // Connect to the exposed port
  user: dbUser!,
  password: dbPassword!,
  database: dbName!,
});

try {
  client.connect();
  console.log("Connected to PostgreSQL successfully");
} catch (error) {
  console.error("Error connecting to PostgreSQL:", error);
}

export default client;