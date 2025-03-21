const express = require("express");
const Router = express.Router();
const mwCheckUser = require("../Middleware/checkUser");
const dataControls = require("../Controllers/controls");
const { Products, Brands } = require("../DB-Collections/collections");

Router.post("/addProduct", mwCheckUser.checker, dataControls.storeData);
Router.get("/getProducts", dataControls.getProducts);
Router.get("/getBrands", dataControls.getBrands);

Router.get("/BrandsUp", async (res,req) => {
  
    try{

        let updatedBrand = await Brands.findOneAndUpdate(
            { owner: "Huzaifa" }, // Jisko update karna hai (filter)
            { brand: "H & Sons Collection" }, // Jo update karna hai
            { new: true } // Ye ensure karega ke updated document return ho
          );

          console.log(updatedBrand);

        return req.send(updatedBrand);

    } catch (err) {
        console.log(err);
    }
});


Router.get('/productsUp', async (req,res)=> {
   
    try{

        let newProducts = await Products.updateMany(

            { brand: "zeeshan SD Collections" }, // Jitne bhi is naam ke hain unko update karega
            { $set: { brand: "ZSD Collection" } }
        )
    
        console.log('new products ==>',newProducts);

        res.send(`update successfully, ${newProducts}`)
        

    } catch (c) {
        console.log(c);
    }
})
module.exports = Router;


/* 



*/