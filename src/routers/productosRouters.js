const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosControllers');

router.get('/', productosController.productsGet)

router.get('/crear', productosController.crearProducto)
router.post('/crear', productosController.guardarProducto) 

router.get('/detalle/:id', productosController.productDetail)

router.get('/edit/:id', productosController.editarProducto)
router.put('/edit/:id', productosController.guardarEdicionProducto)

router.delete('/delete/:id', productosController.borrarProducto)

router.get('/carrito', productosController.cart)

module.exports = router;
