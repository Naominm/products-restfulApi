import express from "express";
import { PrismaClient } from "@prisma/client";
import productsRouter from "./routes/produtsRouter.js"
import validateProducts from "./middleware/validateProducts.js";

const app = express();
const client=new PrismaClient();

app.use(express.json());
app.use('/products',productsRouter)

app.get("/products", )

app.get("/products/:productsId" , async(req ,res)=>{
    const {productsId}=req.params
try {
    const product=await client.products.findFirst({
   where:{
    id:productsId
   }
    })
    if(!product){
        res.status(404).json({
          status:"Error",
          message:"Product Not Found"  
        })
    }
    res.status(200).json({
        status:"Success",
        data:product
    })
 
} catch (e) {
    res.status(500).json({
        status:"Error",
        message:"something went wrong"
    })
    
}
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
app.patch("/products/:productsId", async(req,res)=>{

    const {productsId}=req.params

    const{productTitle,productDescription,pricePerUnit,unitsLeft,isOnOffer}=req.body
try {
    const updatedProduct=await client.products.update({
        where:{
            id:productsId
        },
        data:{
            productTitle:productTitle&&productTitle,
            productDescription:productDescription && productDescription,
            pricePerUnit:pricePerUnit&&pricePerUnit,
            unitsLeft:unitsLeft&&unitsLeft,
            isOnOffer:isOnOffer&&isOnOffer,
        }
    })
    res.status(200).json({
        status:"Success",
        message:"Product Updated successfully",
        data:updatedProduct
    })
} catch (e) {
    res.status(500).json({
        status:"Error",
        message:"something went wrong"
    })
    
}
})
app.delete("/products/:productsId", async(req ,res)=>{
    const {productsId}=req.params;
    try {
        await client.products.delete({
            where:{
                id:productsId
            }
        })
        res.status(200).json({
            status:"Success",
            message:"Successfully deleted Product"
        })
    } catch (e) {
        res.status(500).json({
            status:"Error",
            message:"Somethig went wrong"
        })
        
    }
})
let port= process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server running on port 4000`)
})