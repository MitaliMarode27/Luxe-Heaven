import { MongoClient } from "mongodb";
import { env } from "./env.js";

// Create a MongoDB client
export const client = new MongoClient(env.MONGODB_URI);

try {
  // Connect to MongoDB
  await client.connect();
  console.log("Connected to MongoDB successfully!");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1); // Exit the process if the connection fails
}

export default client;