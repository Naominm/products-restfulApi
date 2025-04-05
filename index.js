import express from "express";
import { PrismaClient } from "@prisma/client";
import validateProducts from "./middleware/validateProducts.js";

const app = express();
app.use(express.json());
const client=new PrismaClient();

app.get("/products", (req, res) =>{
    res.send("Getting all products")
})

app.get("/products/:productsId" ,(req ,res)=>{
res.send("Getting a specific product")
})

app.post("/products" ,[validateProducts] , async (req,res)=>{
const {productTitle, productDescription,unitsLeft,pricePerUnit,isOnOffer}=req.body
try {
    const newProduct= await client.products.create({
        data:{
            productTitle,
            productDescription,
            unitsLeft,
            pricePerUnit,
            isOnOffer
        }
    })
    res.status(201).json({
        status:"success",
        message:"New Product added successfully",
        data:newProduct
    })
} catch (e) {
    res.status(500).json({
        status:"Error",
        message:"An error occurred"
    })
}
})
app.patch("/products/:productId",(req,res)=>{
res.send("Updating a Product")
})
app.delete("/products/:productId",(req ,res)=>{
    res.send("Deleting a product")
})
let port= process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server running on port 4000`)
})