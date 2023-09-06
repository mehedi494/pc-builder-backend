// const express = require("express");
// const app = express();
require("dotenv").config();

const mongoose = require("mongoose");

// eslint-disable-next-line no-undef
const port = process.env.PORT | 5000;

const Database = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(`${process.env.DB_URL}`);
    application.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Database };
