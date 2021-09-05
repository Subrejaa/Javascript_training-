var express=require('express')
var router=express.Router();
var student=[]
 router.get("/regstudent",function(req,res){
     res.sendFile(__dirname+"/studregister.html");
 })

 router.get("/studentlist",function(req,res){
     res.render("stud",{
         allstudents:student
     })
 })

 router.post("/studentregister",function(req,res){
     student.push(req.body);
     res.send("Student registration successful")
 })

 module.exports=router;