const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');


//Create order - /api/v1/order
exports.createOrder = async (req,res,next) =>{
    // console.log(req.body,'DATA');
    const cartItems = req.body;
    const amount = Number (  cartItems.reduce((acc,item)=>(acc + item.product.price *item.qty),0 )/*initial value*/).toFixed(2); // reduce covert the total array data as single data
    // console.log(amount,"AMOUNT");
    const status = 'pending';

   const order = await orderModel.create({
        cartItems,amount,status
    })
    //uPDATING pRODUCTS STOCKS
    cartItems.forEach(async(item) => {
        const product =  await productModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    });


    res.json(
        {
            success:'true',
            order
        }
    )
}