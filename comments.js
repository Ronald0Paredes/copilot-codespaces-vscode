// Create web server

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

const comments = require("./routes/api/comments");

app.use("/api/comments", comments);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});