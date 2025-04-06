import {Router} from 'express'
import { PrismaClient } from "@prisma/client";
import validateProducts from "../middleware/validateProducts.js"

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
 .post(
    [validateProducts],   async (req,res)=>{
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
 .patch(
    async(req,res)=>{

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
    }
 )

 export default router;