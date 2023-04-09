
const express = require("express")
const app = express() 

app.get("/",(req,res)=>{
	return res.json({"message":"hello world!!"}) 
});

app.listen(3000,(err)=>{
	if(err) console.log("error starting")
	else console.log("started at 3000")
})
