const express = require("express");
const products = require("./data/product")
const dotenv = require('dotenv')
const connectDb = require('./config/config')
const product = require('./data/product')

//dotenv config
dotenv.config();
//connecting to mongodb database
connectDb();

const app = express();



app.get("/",(req,res) => 
{
    res.send("<h1>Welcome to medlife</h1>");
});

app.get("/product",(req,res)=>
{
    res.json(products);
});


app.get("/product/:ids" ,(req,res) => {
    const pro = products.find((p) => p.id === req.params.ids);
    res.json(pro);

});
const PORT = 8080;
app.listen(process.env.PORT||PORT,()=>{
    console.log('server is running in '+ process.env.NODE_ENV + ' mode on port ' +  PORT)  ;
});



