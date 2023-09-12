const express = require("express");

const mongoose = require("mongoose");
// eslint-disable-next-line no-undef
const port = process.env.PORT | 5000;

const { router } = require("./module/routes");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Server  are GoseBumping 🚀");
});

// Database
const Database = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(`${process.env.DB_URL}`);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

Database();
