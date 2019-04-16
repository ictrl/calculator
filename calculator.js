const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    // res.send("hii baby");
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var add = num1 + num2;
    res.send("Addition : " + add);
    // console.log(req.body);
    
})

app.listen(3000,function(){
    console.log("SERVER IS RUNNING ON 3000 PORT"); 
});
