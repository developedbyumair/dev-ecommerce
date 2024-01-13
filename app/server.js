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

// routes
app.use("/api/v1/userAuth", (req, res) => {
  console.log("req.body", req);
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
