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
// app.delete("/products/:productsId",)
let port= process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server running on port 4000`)
})