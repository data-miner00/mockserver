const express = require("express");
const cors = require("cors");
const { port, host } = require("./config");
const path = require("path");
const fs = require("fs");

const staticPath = path.join("./", "static");
const apiPath = path.join("./", "api");

const app = express();

app.use(cors());
app.use(express.static(staticPath));

const filenames = fs
  .readdirSync(apiPath, { withFileTypes: true })
  .map((file) => file.name)
  .map((file) => file.split("."));

filenames.forEach((file) => {
  const fileData = require(`../api/${file[0]}.${file[1]}`);
  app.get(`/${file[0]}`, (req, res) => {
    res.status(200).send(fileData);
  });
});

app.listen(port, () => console.log("Server listening at port " + port));
