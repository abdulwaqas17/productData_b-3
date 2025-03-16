const express = require('express');
const Router = express.Router();
const mwCheckUser = require('../Middleware/checkUser');
const dataControls = require('../Controllers/controls')


Router.post('/addProduct',mwCheckUser.checker,dataControls.storeData);
Router.get('/getProducts',dataControls.getProducts)
Router.get('/getBrands',dataControls.getBrands)

module.exports = Router;