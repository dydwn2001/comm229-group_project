const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/picapica_db";

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(compression());

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Backend is working!" });
});

// Use Product routes
const productRoutes = require("./server/routes/product.routes");
app.use("/api/products", productRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch(err => console.error("Database error:", err.message));