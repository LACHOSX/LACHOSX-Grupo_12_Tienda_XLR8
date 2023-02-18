const path = require('path');
const fs = require('fs');
// const productsFilePath = path.join(__dirname, '../data/products.json');
// Guarda en una variable la transformacion de JSON en array de objetos.
// let products = JSON.parse(fs.readFileSync(productsFilePath, { encoding: 'utf-8' }));
// sirve para limitar los 0 detras de la coma y que no quede feo a la vista o con muchos decimales
const toThousand = n => n.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models"); 

//LISTADO DE TODOS LOS PRODUCTOS:
const productList = async function (req, res){
    //let getProductList = await db.Product.findAll
    try {
        let getProductList = await db.Product.findAll()
        console.log(getProductList);
        res.render('products/productList', {getProductList, toThousand});   
    }
        catch (error) {
        console.log("ERROR LIST", error)}
    
}

// CREACION DEL PRODUCTO
const createProduct = function (req, res) {    
    res.render('../views/products/newProduct.ejs');
}

//GUARDADO DEL PRODUCTO
const storeProduct = async function (req, res, next) {
    try {
        await db.Product.create({
            title: req.body.title,
            photo1: req.body.img1,
            photo2: req.body.img2,
            photo3: req.body.img3,
            description: req.body.description,
            price: req.body.price,
            price_discount: req.body.price_discount,
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

//DETALLE DEL PRODUCTO
const productDetail = async function (req, res) {
    try {
        let getDetailProduct = await db.Product.findByPk(req.params.id)
        console.log(getDetailProduct);
        res.render('products/productDetail', {getDetailProduct, toThousand});
    } catch (error) {
        console.log("ERROR DETAIL PRODUCT", error)
    }
    
}

// LOGICA DE EDITAR PRODUCTO
const editProduct = async function (req, res) {
    try {
        let getProduct = await db.Product.findByPk(req.params.id)
        console.log(getProduct);
        res.render('products/editProduct', { getProduct: getProduct })
    } catch (error) {
        console.log("ERROR EDIT PRODUCT", error)
    }
}

//, { include: { all: true } }
//ACTUALIZACION DEL PRODUCTO 
const updateProduct = async function(req, res, next) {
    let getProductToEdit = await db.Product.findByPk(req.params.id)
    console.log(req.body)
    try {
        if (req.body.image == undefined) {
            //si viene indefinido el campo de imagen, almacena la misma imagen que ya tenia
            await getProductToEdit.update({
                ...req.body,
                photo1: productDetail.img1,
                photo2: productDetail.img2,
                photo3: productDetail.img3
            })
            
            res.redirect('/')                    
        } else {
            //si viene una nueva imagen en la edicion, se almacena la nueva imagen
            await getProductToEdit.update({
                ...req.body,
                photo1: req.file.img1,
                photo2: req.file.img2,
                photo3: req.file.img3
            })
            res.redirect('/')
        } 
    } catch (error) {
        console.log("ERROR UPDATE PRODUCT", error)
    }

    //redirecciona a ruta de productos (hacer redireccion a detalle del producto editado. Primero hacer logica find by pk con el id que viene por req.params.id y guardarlo en variable similar a detalle y mandarlo a la vista la info del producto una vez editado.)
}

//  BORRADO DE PRODUCTO
const deleteProduct = async function (req, res) {
    try {
         let getProduct = await db.Product.destroy(req.params.id)
            
         console.log(getProduct),
         {
            where: {
                id: req.params.id
            }
        };
        console.log(getProduct);
        res.redirect('./products') 
    } catch (error) {
        console.log("ERROR DELETE PRODUCT", error)
    }
}

module.exports = {productList, createProduct, storeProduct, productDetail, editProduct, updateProduct, deleteProduct};

//cart, productCartNone