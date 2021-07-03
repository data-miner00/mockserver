const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.EXPRESS_APP_PORT | 8888,
  host: process.env.EXPRESS_APP_HOST,
  url: process.env.EXPRESS_APP_HOST_URL,
};
