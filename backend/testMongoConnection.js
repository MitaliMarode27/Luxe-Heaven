import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://MitaliMarode:Mitali927@cluster0.g7dqyzm.mongodb.net/Users?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  })
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));