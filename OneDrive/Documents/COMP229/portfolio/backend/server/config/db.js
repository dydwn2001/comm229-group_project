import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME
    });

    console.log(`Connected to MongoDB: ${conn.connection.name}`);
  } catch (err) {
    console.error("Mongo connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
