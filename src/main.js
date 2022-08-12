const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.json())
const route = require("./config/routes");
route(app);

app.get("/",function (req, res, next){
    if (false){
        res.send("Erro de Autenticação")
    }else{
        next();
    }
    
},function (req, res){
    return res.json({user:"Italo Medeiros", login:"ibmo", email:"italomedeiros@gmail.com" ,idade:36});
})

app.listen(3000,"0.0.0.0",function(){
    console.log("Server running...");
})