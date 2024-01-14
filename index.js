require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const RouteUser = require("./routes/user.routes");
const RoutePosition = require("./routes/position.routes");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URL, {})
  .then((res) => {
    console.log("Database terhubung");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(cors());
app.use(bodyParser.json());
app.use("/user", RouteUser);
app.use("/position", RoutePosition);
app.listen(process.env.PORT, (req, res) => {
  console.log("Server running in port ", process.env.PORT);
});
