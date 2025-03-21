require('dotenv').config();  // .env file ko load karne ke liye

const mongoURI = process.env.MONGO_URI;  // .env se MongoDB URI le rahe hain

const mongoose = require('mongoose');

mongoose.connect(mongoURI).then(() => {
    console.log("✅ MongoDB Connected Successfully!");
  }).catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
  });


// SHEMA FOR PRODUCTS
const productSchema = mongoose.Schema({
    
    brand : String,
    pName : String,
    pPrice : Number,
    pColor : String,
    isAvailable : Boolean
});



// SHEMA FOR BRANDS
const brandSchema = mongoose.Schema({
    brand : String,
    owner : String,
    email : String
})

let Brands = mongoose.model('brands',brandSchema)

let Products = mongoose.model('products',productSchema);
module.exports = {Products,Brands};