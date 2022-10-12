const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const noteRoutes = require("./routes/notekeeper");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
if (process.env.NODE_ENV === "production") {
  app.use(express.static("Frontend/build"));
}

app.use(cors());
app.use(bodyParser.json());
app.use(noteRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(parseInt(process.env.PORT) || 5000);
});
