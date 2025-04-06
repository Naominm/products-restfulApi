import express from "express";
import { PrismaClient } from "@prisma/client";
import productsRouter from "./routes/produtsRouter.js"
import validateProducts from "./middleware/validateProducts.js";

const app = express();
const client=new PrismaClient();

app.use(express.json());
app.use('/products',productsRouter)

app.get("/products", )

app.get("/products/:productsId" ,)

app.post("/products" ,[validateProducts] , )
// app.patch("/products/:productsId", )
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
            message:"Something went wrong"
        })
        
    }
})
let port= process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server running on port 4000`)
})