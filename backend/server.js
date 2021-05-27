const express = require("express");
const router = require("./router/router");
require("./database/mongo");

// Create the Express application
const app = express();
app.set("trust proxy", 1); // trust first proxy

// Import and addition of all the different API routes
app.use("/", router);

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log("Server running on", port);
});

module.exports = { app, server };
