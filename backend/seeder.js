const mongoose =require('mongoose');
const connectDb = require('./config/config');
const dotenv = require('dotenv');
const product = require('./models/product');
//const users = require('./data/users');
const products = require('./data/product');
const user = require('./models/product');

dotenv.config();
connectDb();

const importData = async () => {

    try {
        await product.deleteMany();
        const sampleData= products.map(product =>{
            return{...product}
        })
        await product.insertMany(sampleData)
        console.log('Data imported')
        process.exit()
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

const dataDestroy = async ()=>{
    await product.deleteMany();
    console.log(error);
    process.exit()

}

if(process.argv[2] === "-d")
{
    dataDestroy();
}
else
{
    importData();
}