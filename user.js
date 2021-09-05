var express=require("express")
var app=express()
var users=[]
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.set("view engine","pug");
app.set("views","./view");

app.get("/t",function(req,res){
    res.sendFile(__dirname+"/user.html")
})
app.post("/tab",function(req,res){
    console.log("req param data :: ",req.body)
    users.push(req.body)
    res.render("user",{
        allusers:users
    })
})
app.listen(7080,function(){console.log("Listening on 7080")})