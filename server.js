const express=require('express');
///const path=require('path');
const ejs=require('ejs');
const bodyParser=require('body-parser');
///const rootDirectory=require('./utilities/path');
const adminRouter = require('./routes/admin');
const shopRouter =require('./routes/shop');
const app= express();

app.set('view engine',ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use('/admin', adminRouter); ///admin is a filter
app.use(shopRouter);

app.use((req,res)=>{
    res.render('404.ejs', {pageTitle: 'Page not found', path: ''});
    ///res.status(404).sendFile(path.join(rootDirectory,'views','404.html'));
});

app.listen(5000, ()=>{
    console.log('Server is running on Port 5000');
});