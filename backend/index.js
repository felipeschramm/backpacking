const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/backpacking",
  {
    useNewUrlParser: true
  }
);

app.use("/api", routes);
app.use("/", (req,res) => {
    res.send("alo");
});
app.listen(9000);