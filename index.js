import express from "express";
import { PrismaClient } from "@prisma/client";
import productsRouter from "./routes/produtsRouter.js"


const app = express();
const client=new PrismaClient();

app.use(express.json());
app.use('/products',productsRouter)

let port= process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server running on port 4000`)
})