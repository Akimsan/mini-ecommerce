const mongoose = require('mongoose');


//define data type in products collections
 const orderSchema =  new mongoose.Schema({
  cartItems:Array,
  amount:String,
  status:String,
  createdAt:Date
})

// create model
 const orderModel =  mongoose.model('order'/*it shuld be singuler*/,orderSchema);

 module.exports = orderModel;