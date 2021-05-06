const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const https = require("https");
const fs = require("fs");

// load environment
require("dotenv").config({ path: path.join(__dirname, ".env") });

// set up https
const key = fs.readFileSync(process.env.SSL_KEY_FILE);
const cert = fs.readFileSync(process.env.SSL_CRT_FILE);
const options = { key, cert };

// initialize server
const app = express();

// set up middleware
app.use(express.json());
app.use(cors());

// set up backend routes
const routes = require("./auth.routes");
app.use("/auth", routes);

// connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// start server
var server = https.createServer(options, app);
server.listen(3000, () => console.log("Running server on port 3000..."));
