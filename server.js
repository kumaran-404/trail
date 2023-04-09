
const express = require("express")
const app = express() 

app.listen(3000,(err)=>{
	if(err) console.log("error starting")
	else console.log("started at 3000")
})
