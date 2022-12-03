

const express =require("express");
const app = express();
// use is middaleware
app.use((req,res,next)=>{
console.log("in the middleware");
next(); // without next we cant access another middleware

})
app.use((req,res,next)=>{
    console.log("in the another middleware");
    res.send("<h1>hi from expresss</h1>")
    // res.send( '{ key1: value }')
    
    })


app.listen(4000);
