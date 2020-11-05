// all controllers of product is moving here
const Product = require('../models/productModel');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        // co the truyen 1 so value vao template
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    // when post new product add it to Model
    const product = new Product(req.body.title);
    // save to global variable in productModel
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    // collect data products from adminData route
    // products tu ben admin push sang co object= title
    // get all data products from model
    // --1-- using callback function, khi fetchAll done thi moi tien hanh render file
    // if not have this render will error because no data in model.
    // products chinh la value tra ra tu callback function -> đem đi render
    Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
}