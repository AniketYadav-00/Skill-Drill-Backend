import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DataBase is connected");
  } catch (error) {
    console.log("Failed to connect database", error);
  }
};

export default connectDB;