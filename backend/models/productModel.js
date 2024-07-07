import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:[true,"Please enter product name"]
    },

    description:{
        type:String,
        required:[true,"please enter product description"]
    },

    price:{
        type:Number,
        required:[true,"please enter product price"],
        maxLength:[8,"price can't exceed more than 8 character"]
    },

    rating:{
        type:Number,
        default:0
    },
    
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],

    category:{
        type:String,
        required:[true,"please enter product category"]
    },

    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:4,
        default:1
    },

    numOfReviews:{
        type:Number,
        default:0
    },

    reviews:[
        {
            name:{
                type:Number,
                required:true
            },
            rating:{
                type:Number,
                required:true,
            },
            Comment:{
                type:String,
                required:true
            }
        }
    ],
    
    createdAt:{
        type:Date,
        default:Date.now
    }
})
export const Product = mongoose.model("Product", productSchema);