import express from "express";

const app=express()


let port= process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server running on port 3000`)
})