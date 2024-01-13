import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = 3000;

//configure env
dotenv.config();
// database connection
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes
app.use("/api/v1/userAuth", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
