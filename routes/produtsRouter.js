import {Router} from 'express'
import { PrismaClient } from "@prisma/client";

const client=new PrismaClient();
 const router= Router();

 router.route("/")
 .get(
    async(_req, res) =>{
        try {
            const products= await client.products.findMany();
            res.status(200).json({
                status:"Success",
                message:"Successfully fetched products",
                data:products
            })
        } catch (e) {
           res.status(500).json({
            status:"Error",
            message:"Something went wrong. Please try again"
           }) 
        }
    }
 )

 router.route("/:productsId")
 .get(
    async(req ,res)=>{
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
    }
 )

 export default router;