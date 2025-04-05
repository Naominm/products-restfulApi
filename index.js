import express from "express";

const app = express();

app.get("/products", (req, res) =>{
    res.send("Getting all products")
})

app.get("/products/:productsId" ,(req ,res)=>{
res.send("Getting a specific product")
})

app.post("/products" ,(req,res)=>{
res.send("Creating a product")
})
let port= process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server running on port 4000`)
})