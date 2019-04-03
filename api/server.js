const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../routers/auth-router.js");
const usersRouter = require("../routers/user-router.js");
const restricted = require("../middleware/restricted-middleware.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", restricted, usersRouter);

server.get("/", (req, res) => {
  res.send("Hello Earthling");
});

module.exports = server;
