import {Router} from 'express'
import {createProduct,getAllProducts,getSpecificProduct,updateProduct,deleteProduct} from '../controllers/productController.js'
import validateProducts from "../middleware/validateProducts.js"


 const router= Router();

 router.route("/")
 .get(getAllProducts)
 .post([validateProducts],createProduct)

 router.route("/:productsId")
 .get(getSpecificProduct)
 .patch(updateProduct)
 .delete(deleteProduct)

 export default router;