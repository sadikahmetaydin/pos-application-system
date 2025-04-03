const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = 5000;

// Routes
const categoryRoute = require("./routes/categories.js");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  connect();
});
