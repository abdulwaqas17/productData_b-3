const { Brands } = require("../DB-Collections/collections");
// console.log("Brands", Brands);

const checker = async (req, res, next) => {
  //post man m jo kuch bhi likhen gy wo is m milay ga
  // console.log(req.body);
  const { email, owner, brand } = req.body;

  if (!email || !brand || !owner) {
    return res.status(400).json("[brand,email & owner] is required");
  }

  if (email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const isValid = regex.test(email);

    if (!isValid) {
      return res.status(402).json("Email is not valid");
    }
  }

  try {
    let allBrands = await Brands.find();

    if (allBrands.length < 1) {

      let myBrand = await Brands.create({
        brand,
        email,
        owner,
      });

      console.log(myBrand);
      console.log('congratulation on new brand');
      req.yourStatus = `Congratulation! ${owner} you create a new Brand`;

      next();

     
        
    } else {

      var brandIs = 'new';
      var emailIs = 'new';

     

        allBrands.forEach((i)=> {

        

            if(i.email == email){

                emailIs = 'old';

            } 

            if(i.brand == brand) {
                brandIs = 'old';

            } 
            
        })
        

    }

    // let brandExists = await Brands.findOne({ brand });
    // let emailExists = await Brands.findOne({ email });
  
    // // ✅ Data pass karne ke liye `req` me custom properties add kar rahe hain
    // req.brandStatus = brandExists ? "old" : "new";
    // req.emailStatus = emailExists ? "old" : "new";

    // if (allBrands.length > 0) {
    //   allBrands.forEach((i) => {
    //     if (i.email == email) {
    //       if (i.brand == brand) {
    //         confirm = "old"; //old
    //       } else {
    //         confirm = "another";
    //       }
    //     } else if (i.brand == brand) {
    //       return res.status(402).json("This brand name is already use");
    //     } else {
    //       confirm = "new";
    //     }

    //     //    if(i.email == email) {

    //     //     return res.status(402).json('This email is already use')

    //     //    }else if (i.brand == brand) {

    //     //     return res.status(402).json('This brand name is already use')

    //     //    }
    //   });
    // } else {
    //   confirm = "new";
    // }
    console.log("brandIs =====", brandIs);
    console.log("emailIs =====", emailIs);

    if (emailIs == 'new' && brandIs == 'new') {
      let myBrand = await Brands.create({
        brand,
        email,
        owner,
      });

      console.log(myBrand);
      console.log('congratulation on new brand');
      req.yourStatus = `Congratulation! ${owner} you create a new Brand`;

      next();
    } else if (emailIs == 'old' && brandIs == 'new') {
      let myBrand = await Brands.create({
        brand,
        email,
        owner,
      });

      console.log(myBrand);
      console.log('congratulation on another brand');
      req.yourStatus = `Congratulation! ${owner} you create another Brand`;

      next();
    } else if (emailIs == 'old' && brandIs == 'old') {
      req.yourStatus = `${owner}, you are using your old Brand.`;
      next();
    }else if (emailIs == 'new' && brandIs == 'old') {
        return res.status(402).json(`${owner} this brand name is already use`);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { checker };
