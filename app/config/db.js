import mongoose from "mongoose";

const connectDB = async () => {
  const dbUrl = process.env.MONGO_URL;

  try {
    const conn = await mongoose.connect(dbUrl);
    console.log(`Conneted To=== Mongodb Databse ${conn.connection.host}`);
  } catch (error) {
    console.log("dbUrl", dbUrl);
    console.log(`Errro in Mongodb ${error}`);
  }
};

export default connectDB;
