//const path =require('path');
///const rootDirectory=require('../utilities/path');
const express=require('express');
const router =express.Router();
const productController=require('../controllers/products');
//const products =[];
///mini app pluggable to another express app

router.get('/add-product',productController.getAddProduct);
   ///res.sendFile(path.join(__dirname, '..', 'views','add-product.html'));
   ///res.sendFile(path.join(rootDirectory,'views','add-product.html'));
router.get('/products');

router.post('/add-product',productController.postAddProduct);

///module.exports=router;
module.exports=router;


