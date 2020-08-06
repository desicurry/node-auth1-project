const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const usersRouter = require("./users/users-router");

const server = express();

const sessionConfig = {
    name: "mySession",
    secret: "not gonna happen",
    cookie: {
        maxAge: 1000 * 30,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.use("/api", usersRouter);

server.get("/", (req, res) => {
    res.json({ api: "up and running"});
});

module.exports = server; 