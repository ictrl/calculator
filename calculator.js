const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    // res.send("Hii Baby");
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var add = n1 + n2;
    res.send("Addition : " + add);
    // console.log(req.body);
    
})

app.listen(3000,function(){
    console.log("SERVER IS RUNNING ON 3000 PORT"); 
});
