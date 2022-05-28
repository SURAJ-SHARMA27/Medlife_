const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
        id:{
            type:Number,
        },

        sr:{
            type:String,
        },

        heading:{
            type:String,
        },
        des:{
            type:String,
        },
        rating:{
            type:Number,
        },
        review:{
            type:Number,
        },
        off:{
            type:String,
        },
        rate:{
            type:String,
        },
        price:{
            type:String,
        },
        offer:{
            type:String,
        },


},{timestamps:true})

const product = mongoose.model('product',userSchema);
module.exports = product;
