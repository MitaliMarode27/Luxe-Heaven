import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Schema from "./Schema.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "mySuperSecretKey123";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing or malformed" });
  }

  const token = authHeader.split(" ")[1]; // Extract the token

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
    const userData = await Schema.findOne({ email: decoded.email }).select({
      password: 0, // Exclude the password
    });

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = userData; // Attach user info to the request
    req.token = token; // Attach the token to the request
    req.userID = userData._id; // Attach the user ID to the request
    next(); // Proceed to the next middleware or route
  } catch (error) {
    console.error("Error verifying token:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;