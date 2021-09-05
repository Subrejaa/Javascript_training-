var express=require('express')
var router=express.Router();
var tkt=[]

router.get("/tkt",function(req,res){
    res.sendFile(__dirname+"/tkt.html");
})
router.get("/tktview",function(req,res){
    res.render("tkt",{
        alltkt:tkt
    })
})

router.post("/tktbook",function(req,res){
    tkt.push(req.body)
    res.send("Ticket Booked succesfully")
})