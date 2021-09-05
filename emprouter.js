var express=require('express')
var router=express.Router();
var emp=[]
 router.get("/regemp",function(req,res){
     res.sendFile(__dirname+"/employeereg.html");
 })

 router.get("/emplist",function(req,res){
     res.render("emp",{
         allemp:emp
     })
 })

 router.post("/empregister",function(req,res){
     emp.push(req.body);
     res.send("Employee registration successful")
 })

 module.exports=router;