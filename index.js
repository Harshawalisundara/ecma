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

//getmapping add two number

app.get('/add/:num1/:num2',(req,res)=>{
    const {num1,num2} = req.params
    const ans =num1+num2;
    res.send(ans)

})
//called app.listen method

app.listen(port,()=>){
    console.log("server is start up");
}