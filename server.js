require("dotenv").config();
const express = require("express");
const mongoConnect = require("./config/mongoConnect");
const indexRouter = require("./router/indexRouter");
const apiRouter = require("./router/apiRouter");
const path = require("path");

const server = express();

server.set("view engine","ejs");
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static(path.join(__dirname,"/public")));

server.use("/",indexRouter);
server.use("/api",apiRouter);

server.listen(process.env.PORT,()=>{
    console.log(`${new Date().toLocaleString()} - Server running!`)
})