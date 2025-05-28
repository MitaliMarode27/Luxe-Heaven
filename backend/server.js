import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import fs from "fs";
import mongoose from "mongoose";
import cors from "cors";
import Schema from "./Schema.js";
import jwt from "jsonwebtoken";
import authMiddleware from "./authMiddleware.js";
import bcrypt from "bcryptjs";
import contact from "./contactModel.js";
import service from "./serviceModel.js";
import { signupSchema,loginSchema } from "../shared/validation.mjs";


const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"], // Allow both possible frontend ports
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
dotenv.config();


const MONGODB_URI = "mongodb+srv://MitaliMarode:Mitali927@cluster0.g7dqyzm.mongodb.net/Users?retryWrites=true&w=majority";
const JWT_SECRET = process.env.JWT_SECRET || "mySuperSecretKey123";

mongoose
.connect(MONGODB_URI)
.then(() => console.log("Connected to MONGODB Successfully!"))
.catch((err) => console.log(err,"Error Connecting to MONGODB"))


app.post('/signup', async (req,res) => {
  try {
    console.log("Signup request received:", req.body);

    const {name, email, phone, password} = req.body;

    if(!name || !email || !phone || !password){
      return res.status(400).json({Message : "All Feild are required!.."});
    }
    
 try {
    signupSchema.parse(req.body);
    // ...rest of your logic...
  } catch (error) {
    return res.status(400).json({ message: error.errors?.[0]?.message || "Invalid input" });
  }
  
  res.status(201).json({message : "Signup Successfull !"})

   const userExists = await Schema.findOne({email});
   if(userExists){
    console.log("User already exists:", email);
    return res.status(400).json({ message: "User already exists" });
   }


   const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

   const newUser = new Schema({name, email, phone, password: hashedPassword});
   await newUser.save();


    const filepath = "./signupInfo.json";
    let existingData = [];
    
    if(fs.existsSync(filepath)){
      const fileContent = fs.readFileSync(filepath,"utf-8");
       existingData = JSON.parse(fileContent || "[]");
    }
    
     existingData.push({ name, email, phone });
     fs.writeFileSync(filepath, JSON.stringify(existingData,null,2));
    
     console.log("User registered successfully:", newUser);
     res.status(201).json({ Message: "User registered successfully!" }); 
     
  } catch (error) {
    console.error("Error saving signup data:", error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
  
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

   try {
    loginSchema.parse(req.body);
    // ...rest of your logic...
  } catch (error) {
    return res.status(400).json({ message: error.errors?.[0]?.message || "Invalid input" });
  }


  try {
    console.log("Login request received:", req.body);
    // Find the user by email
    const user = await Schema.findOne({ email: { $regex: new RegExp(`^${email}$`, "i") } });    if (!user) {
      console.log("User not found:", email);
      return res.status(404).json({ message: "User Not Found" });
    }

    // Check if the password matches
    const isMatch = await user.matchPassword(password);
    console.log("Password match:", isMatch);
    if (!isMatch) {
      console.log("Invalid password for user:", email);
      return res.status(401).json({ message: "Invalid Credential" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Login successful, token generated:", token);
    res.status(200).json({ message: "Login Successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate the incoming data
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Save the contact information to the database
    const newContact = await contact.create({ name, email, message });

    console.log("Contact information saved:", newContact);
    res.status(201).json({ message: "Contact information saved successfully!" });
  } catch (error) {
    console.error("Error saving contact information:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.get("/service", async (req, res) => {
  try {
    const services = await service.find(); // Fetch all service data from the database
    res.status(200).json({ message: "Services fetched successfully!", data: services });
  } catch (error) {
    console.error("Error fetching service information:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});




app.get("/protected", authMiddleware, (req,res) => {
  res.status(200).json({message : "This is a Protected Route, user : " , user : req.user});
})


app.get('/signup/fetch', async (req, res) => {
  try {
    const user = await Schema.find();
    const filePath = "./signupInfo.json";
    let fileData = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      fileData = JSON.parse(fileContent || "[]");
    }
    res.status(200).json({ Message: "Successful", mongoData: user, data: fileData }); // Use the correct variable name
  } catch (error) {
    console.error("Error fetching signup data:", error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
});


app.get("/user", authMiddleware, async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
const user = await Schema.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
})



process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully.");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down gracefully.");
  process.exit(0);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});