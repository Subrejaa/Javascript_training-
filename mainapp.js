var express=require('express')
var app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.set("view engine","pug");
app.set("views","./view");

var studentroute=require("./studrouter")
app.use("/student",studentroute)

var employeeroute=require("./emprouter")
app.use("/emp",employeeroute)

app.get("/" ,function(req,res){
    res.sendFile(__dirname+"/homepage.html")
})



app.listen(8090,function(){console.log("listening to 8090");})