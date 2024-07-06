const productModel = require('../models/productModel');
const ProductModel = require('../models/productModel');


//Get Products API - /api/v1/products
exports.getProducts = async (req,res,next) => {
  
  //filter base product name for using search products
  const query = req.query.keyword?{ name : { 
    $regex: req.query.keyword,
    $options: 'i'//NO case sensitive
 }}:{}
const products = await ProductModel.find(query);
res.json({
    success: true,
    products
})
}


//Get SingleProducts API - /api/v1/products/:id
exports.getSingleProduct = async(req,res,next) => {
   try {
           const product = await productModel.findById(req.params.id);
           
           res.json({
             success:true,
             product
            })
        } catch (error) {
           res.status(404).json({
             success:false,
             message:'Unable to get Product with that ID'
            })
        }

 
  
  }

