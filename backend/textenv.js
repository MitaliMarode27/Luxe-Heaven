import fs from "fs";
import dotenv from "dotenv";
console.log("Does .env exist?", fs.existsSync("./.env"));
dotenv.config();
console.log("MONGODB_DATABASE_NAME:", process.env.MONGODB_DATABASE_NAME);
console.log("TEST_VAR:", process.env.TEST_VAR);