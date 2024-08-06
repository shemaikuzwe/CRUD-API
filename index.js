const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./routes/product.route");
require("dotenv").config();
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connected to mongo db..");
  })
  .catch((e) => {
    console.log(e);
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/product", productRouter);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
