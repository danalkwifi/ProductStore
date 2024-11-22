import mongoose from "mongoose";

//creating a schema
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true
    },

}, {
    timestamps: true //createdAt, updatedAt
});

//tell mongose to create a collection called Product following the productSchema
const Product = mongoose.model('Product', productSchema);

export default Product;