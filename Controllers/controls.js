const {Products,Brands} = require('../DB-Collections/collections');
console.log('Products',Products);

// STORE DATA IN MONGO DB
const storeData = async (req,res)=> {

    console.log(req.body);

    const {brand,pName,pPrice,pColor,isAvailable} = req.body;

    if (!brand || !pName || !pPrice || !pColor || !isAvailable) {
        return res.status(403).json('Kindly Fill all the details')
    }

    try {

        const product = await Products.create({

           
            brand,
            pName,
            pColor, 
            pPrice,
            isAvailable

        })

        console.log('product added successfully');
        console.log(product);
        res.status(200).json({
            
            yourStatus : req.yourStatus,
            message : 'product added successfully',
            details : product 
        })

    } catch (err) {

        console.log(err);
        res.status(404).json(err.errors)
    }


    
}
// FOR GETTING ALL THE PRODUCTS
const getProducts = async (req,res) => {


    try{

        let data = await Products.find();

        console.log(data);
    
        res.status(200).json({
            message : 'all products data',
            products : data,
            
        })

    }catch(err) {
        console.log(err);
        res.status(403).json('products not found')
    }
}




// FOR GETTING ALL THE BRANDS
const getBrands = async (req,res) => {


    try{

        let data = await Brands.find();

        console.log(data);
    
        res.status(200).json({
            message : 'all brands',
            brands : data,
            
        })

    }catch(err) {
        console.log(err);
        res.status(403).json('brands not found')
    }
}

module.exports = {storeData,getProducts,getBrands}