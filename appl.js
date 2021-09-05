var express=require("express")
var app=express();
app.get("/",function(req,res){
    res.send("Hello world");
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/register.html")
})
app.listen(8090,function(){console.log("listening on 8090");})