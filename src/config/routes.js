// const express = require("express");
// const app = express();
const userRouter = require("./../modules/user/router")
// console.log(userRouter);
// app.use("/user", userRouter)
module.exports = function(app){
    app.use("/user", userRouter)
}