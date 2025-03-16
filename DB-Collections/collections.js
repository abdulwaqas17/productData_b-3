const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://waqas:waqas17@cluster0.ca47n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


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