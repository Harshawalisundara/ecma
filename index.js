//import express module
const express = require('express')


//creat application object
const app = express()
//define port
const port = 3000

//getmapping
app.get('/project',(req,res)=>{
    res.sendstatus(200)
})

//called app.listen method

app.listen(port,()=>){
    console.log("server is start up");
}