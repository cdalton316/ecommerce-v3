import asyncHandler from '../middleware/asyncHandler.js'
import Product from "../models/productModel.js"

// @desc Fetch all product
// @route Get /api/products
// @asccess Public
const getProducts= asyncHandler( async (req,res)=>{
   const products= await Product.find({})
   res.json(products)
})

// @desc Fetch a product
// @route Get /api/products/:id
// @asccess Public
 const getProductsById = asyncHandler( async (req,res)=>{
    const product=await Product.findById(req.params.id)
    if(product){

        return res.json(product)
    }else{
    res.status(404)
    throw new Error('Resource not found')
}
})


export {getProducts,getProductsById}












































