const express = require("express");
const mongoose = require("mongoose");


require("dotenv").config();
// mongoose.connect(process.env.MONGO_URI)

const app = express();  

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected ✅");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error ❌:", err);
});
