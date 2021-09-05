var express=require("express")
var app=express()
var student=[]
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get("/",function(req,res){
    res.sendFile(__dirname+"/register.html");
})
app.post("/register",function(req,res){
    console.log("req params data :: ",req.body)
    student.push(req.body)
    res.send(JSON.stringify(student))
})


app.listen(7080,function(){console.log("Listening on 7080")})
