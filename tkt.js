var express=require('express')
var app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.set("view engine","pug");
app.set("views","./view");

var tktrou=require("./tktroute")
app.use("/t",tktrou)

app.get("/",function(req,res){
    res.sendFile(__dirname+"/Tkthome.html")
})

app.listen(9090,function(){console.log("listening to 9090");})