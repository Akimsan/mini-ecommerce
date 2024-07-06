const mongoose = require('mongoose');


//define data type in products collections
 const productSchema =  new mongoose.Schema({
   name:String,
   price:String,
   description:String,
   ratings:String,
   images:[
    {
        image:String
    }
   ],
   category:String,
   seller:String,
   stock:String,
   numberOfReviews:String,
   createdAt:Date
})

// create model
 const productModel =  mongoose.model('product'/*it shuld be singuler*/,productSchema);

 module.exports = productModel;