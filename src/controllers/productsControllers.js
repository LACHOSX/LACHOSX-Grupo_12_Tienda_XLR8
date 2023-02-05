const path = require('path');
const fs = require('fs');
// const productsFilePath = path.join(__dirname, '../data/products.json');
// Guarda en una variable la transformacion de JSON en array de objetos.
// let products = JSON.parse(fs.readFileSync(productsFilePath, { encoding: 'utf-8' }));
// sirve para limitar los 0 detras de la coma y que no quede feo a la vista o con muchos decimales
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models"); 


// CREACION DEL PRODUCTO
const createProduct = function (req, res) {    
    res.render('../views/products/newProduct.ejs');
}


//GUARDADO DEL PRODUCTO
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
        console.log("ERROR CREATE", error)
    }
    
    res.render('products/newProduct');
}

// LOGICA DE EDITAR PRODUCTO
const editProduct = async function(req, res) {
	try{
	    let getProduct = await db.Product.findByPk(req.params.id)

        res.render('products/editProduct', {getProduct: getProduct})
    }   catch (error) {
            console.log("ERROR EDITPRODUCT", error)
    }   

    
}


//ACTUALIZACION DEL PRODUCTO 
const updateProduct = async function(req, res) {
    try {
        await db.Product.update({
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
        }, {
            where: {
                id: req.params.id
            }
        }); 
               
    } catch (error) {
        console.log("ERROR CONTROLLER", error)
    }
    res.redirect('/productDetail/:id') //redirecciona a ruta de productos
}

module.exports = {createProduct, storeProduct, editProduct, updateProduct};

//productsList, productDetail, editProduct, updateProduct, deleteProduct, cart, productCartNone 