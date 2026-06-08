const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8"]);

const mongoose = require("mongoose");
const password = encodeURIComponent("$215172@LezGo");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
