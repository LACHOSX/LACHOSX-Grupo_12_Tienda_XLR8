const path = require('path');
const fs = require('fs');
// const productsFilePath = path.join(__dirname, '../data/products.json');
// Guarda en una variable la transformacion de JSON en array de objetos.
// let products = JSON.parse(fs.readFileSync(productsFilePath, { encoding: 'utf-8' }));
// sirve para limitar los 0 detras de la coma y que no quede feo a la vista o con muchos decimales
const toThousand = n => n.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models"); 

// Funcion que nos retornara el resultado de dicha validacion que efectuamos previamente
const { validationResult } = require('express-validator');

//LISTADO DE TODOS LOS PRODUCTOS:
const productList = async function (req, res){
    //let getProductList = await db.Product.findAll
    try {
        let getProductList = await db.Product.findAll();
        res.render('products/productList', {getProductList, toThousand});   
    } catch (error) {
        console.log("ERROR LIST", error)
    }
    
}

// CREACION DEL PRODUCTO
const createProduct = function (req, res) {    
    res.render('../views/products/newProduct.ejs');
}

//GUARDADO DEL PRODUCTO
const storeProduct = async function (req, res, next) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
        try {
            await db.Product.create({
                ...req.body,
                photo1: req.file.filename,
            });        
        } catch (error) {
            console.log("ERROR CREATE", error)
        }        
        res.render('products/newProduct');                
    } else {
        console.log(errors)
        return res.render ('products/newProduct', {
            errorMsg: errors.errors,
            old: req.body
        })
    }    
}

//DETALLE DEL PRODUCTO
const productDetail = async function (req, res) {
    try {
        let getDetailProduct = await db.Product.findByPk(req.params.id)
        res.render('products/productDetail', {getDetailProduct, toThousand});
    } catch (error) {
        console.log("ERROR DETAIL PRODUCT", error)
    }  
}
// LOGICA DE EDITAR PRODUCTO
const editProduct = async function (req, res) {
    try {
        let getProduct = await db.Product.findByPk(req.params.id)
        res.render('products/editProduct', { getProduct })
    } catch (error) {
        console.log("ERROR EDIT PRODUCT", error)
    }
}

//ACTUALIZACION DEL PRODUCTO 
const updateProduct = async function(req, res, next) {
    let idProduct = req.params.id;
    let getProduct;
    try{
        getProduct = await  db.Product.findByPk(idProduct);
    } catch(error){
        console.log(error);
    }
    try {
        if (req.file == undefined) {
            //si viene indefinido el campo de imagen, almacena la misma imagen que ya tenia
            await getProduct.update({
                ...req.body,
                photo1: getProduct.img1,
                photo2: getProduct.img2,
                photo3: getProduct.img3,                
            })  
            getProduct = await  db.Product.findByPk(idProduct);
            res.render('products/editProduct', { getProduct })
                
        } else {
            //si viene una nueva imagen en la edicion, se almacena la nueva imagen
            console.log("entro a la imagen que llega por req.file");
            await getProduct.update({  
                ...req.body,
                photo1: req.file.filename,
                photo2: getProduct.img2,
                photo3: getProduct.img3,
            })
            getProduct = await  db.Product.findByPk(idProduct);
            res.render('products/editProduct', { getProduct })
          
        } 
    } catch (error) {
        console.log("ERROR UPDATE PRODUCT", error)
    }
}
//  BORRADO DE PRODUCTO METODO HARD DELETE
const deleteProduct = async function (req, res) {
    try {
         let getProduct = await db.Product.findByPk(req.params.id) 
         
         console.log(getProduct)
         
         await getProduct.destroy()
         
         
        res.redirect('/products') 
    } catch (error) {
        console.log("ERROR DELETE PRODUCT", error)
    }
}

module.exports = {productList, createProduct, storeProduct, productDetail, editProduct, updateProduct, deleteProduct};

//cart, productCartNone