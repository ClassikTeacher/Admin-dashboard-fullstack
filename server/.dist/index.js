"use strict";
const express = require("express");
const cors = require("cors");
const router = require("./router/index");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cookieParser());
const options = {
  credentials: true,
  origin: process.env.CLIENT_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(options));
app.use(express.json());
app.use("/api", router);
app.listen(PORT, console.log(`Server started on PORT:${PORT}`));
//# sourceMappingURL=index.js.map
