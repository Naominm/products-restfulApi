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
 

 export default router;