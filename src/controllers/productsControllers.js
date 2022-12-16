const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
// Guarda en una variable la transformacion de JSON en array de objetos.
const products = JSON.parse(fs.readFileSync(productsFilePath, { encoding: 'utf-8' }));
//sirve para limitar los 0 detras de la coma y que no quede feo a la vista o con muchos decimales
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productsList = (req, res) => {
    res.render('products/products', { products, toThousand })
}

const createProduct = (req, res) => {
    res.render('products/newProduct')
}

const storeProduct = (req, res) => {
    // Agregar producto
    //Asi se puede guardar la imagen 
    let camposDeNuevoProducto = {
        id: (products.length + 1),
        ...req.body,
        img1: req.file.filename
    }
    // Pushear producto al array
    products.push(camposDeNuevoProducto);
    // Lo convierte a texto plano (formato JSON)
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    // el 2 es para guardar prolijo el JSON
    //retorna el resultado.
    return res.redirect('/');
}

const productDetail = (req, res) => {
    const productoId = req.params.id;
    const producto = products.find(producto => producto.id == productoId);
    res.render('products/productDetail', { producto, toThousand })
}

const editProduct = (req, res) => {
    let productoId = req.params.id
    let productoParaEditar = products.find(producto => producto.id == productoId);
    res.render('products/editProduct', { productoParaEditar }); //

}

const updateProduct = (req, res) => {

}

const deleteProduct = (req, res) => {
    let newProducts = products.filter(product => product.id != req.params.id)
    let newProductsJSON = JSON.stringify(newProducts, null, 2)
		fs.writeFileSync(productsFilePath, newProductsJSON);
    res.redirect('/products')
}

const cart = (req, res) => {
    res.render('products/productCart')
}

module.exports = { productsList, createProduct, storeProduct, productDetail, editProduct, updateProduct, deleteProduct, cart };