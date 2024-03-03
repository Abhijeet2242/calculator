const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/calculator")
  .then(() => {
    console.log("Connection success......");
  })
  .catch((e) => {
    console.error("Connection error:", e.message);
  });
