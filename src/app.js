//importing required modules
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const mysql = require("mysql2");
const { log } = require("console");
const userRouter = require("./routes/userRoute");
const pokeRouter = require("./routes/pokeRoute");

//running the express
const app = express();

// necessary middleware settings for express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.json());

// all the routes are defined here
app.use("/users", userRouter);
app.use("/home", pokeRouter);

app.listen(3000, function () {
    console.log("server started at port 3000");
})