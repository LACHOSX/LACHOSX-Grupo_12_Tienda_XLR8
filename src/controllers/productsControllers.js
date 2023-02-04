const path = require('path');
const fs = require('fs');
// const productsFilePath = path.join(__dirname, '../data/products.json');
// Guarda en una variable la transformacion de JSON en array de objetos.
// let products = JSON.parse(fs.readFileSync(productsFilePath, { encoding: 'utf-8' }));
// sirve para limitar los 0 detras de la coma y que no quede feo a la vista o con muchos decimales
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models"); 



const createProduct = function (req, res) {    
    res.render('../views/products/newProduct.ejs');
}

const storeProduct = async function (req, res) {
    try {
        await db.Product.create({
            title: req.body.title,
            photo1: req.body.img1,
            photo2: req.body.img2,
            photo3: req.body.img3,
            description: req.body.description,
            price: req.body.price,
            price_discount: req.body.discount,
            size: req.body.size,
            color: req.body.color,
            genre_product: req.body.genero,
            type: req.body.categories,
            new: req.body.new
        });        
    } catch (error) {
        console.log("ERROR CONTROLLER", error)
    }
    
    res.render('products/newProduct');
}


module.exports = {createProduct, storeProduct};

//productsList, productDetail, editProduct, updateProduct, deleteProduct, cart, productCartNone 