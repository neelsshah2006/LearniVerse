import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGODB_URI) {
    throw new Error(" Please provide MONGODB_URI in the .env file");
}

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI); 
        console.log(" Connected to MongoDB");
    } catch (error) {
        console.log(" MongoDB Connection Error:", error);
        process.exit(1);
    }
}

export default connectDb;
