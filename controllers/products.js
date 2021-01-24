///controller for all product-related logic
///const products =[];
const Product =require('../models/product');

exports.getAddProduct = (req,res)=>{
    res.render('admin/add-product.ejs',{
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
};
exports.postAddProduct= (req,res)=>{
   const product = new Product(req.body.title,
    req.body.imageUrl,
    req.body.price,
    req.body.description);

    product.save();
   
    /*products.push({title: req.body.title,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        description: req.body.description
    
    });*/
    res.redirect('/'); ///koduleht on shop.html leht
};

exports.getProducts =(req,res)=>{
    //const products =adminData.products;
    Product.fetchAll(products =>{
        res.render('shop/index.ejs',{
            products: products,
            pageTitle: 'Main Page',
            path: '/'
    });
 
});
    ///res.sendFile(path.join(rootDirectory,'views','shop.html'));
 };