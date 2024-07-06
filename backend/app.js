const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path =require('path');
dotenv.config({path:path.join(__dirname,'config','config.env')})
const connectDatabase = require('./config/connectDatabase');
const cors = require('cors')

app.use(express.json());


//import routss
const products = require('./routes/product');
const orders = require('./routes/order');

//call dataBase connect
connectDatabase();

//use routes
app.use(express.json());
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',orders);


//start server
app.listen(process.env.PORT,()=>{
    console.log(`Server Listening to Port ${process.env.PORT} in  ${process.env.NODE_ENV}`)
});