const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');
const productsController = require('../controllers/productsControllers');

// Validaciones
const validateNewProduct = [
    body('title').notEmpty().isLength({min: 8, max:20}).withMessage('No te olvides ponerle un titulo a tu producto.'),
    body('description').notEmpty().isLength({min: 21, max:123}).withMessage('Escribe una descricion de tu producto.'),
    body('price').notEmpty().isNumeric().withMessage('El precio es muy importante, asi sabran el valor de tu prenda.'),
    body('price_discount').notEmpty().isNumeric().withMessage('Recuerda poner el descuento en el precio, entre 0 y 100.'),
    body('size').notEmpty().withMessage('Que talle es esta prenda?'),
    body('color').notEmpty().withMessage('No te olvides elegir el color de tu articulo.'),
    body('genre_product').notEmpty().withMessage('Debes seleccionar a que genero pertenece esta prenda.'),
    body('type').notEmpty().withMessage('Debes marcar que tipo de producto es.'),
    body('new').notEmpty().withMessage('Debes marcar si el producto es Nuevo o ya existia.')
];

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/products/'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

//RUTA LISTA DE PRODUCTOS
router.get('/', productsController.productList) 

router.get('/create', productsController.createProduct)
router.post('/create', validateNewProduct, upload.single('img1'), productsController.storeProduct)

router.get('/detail/:id',  productsController.productDetail)

router.get('/edit/:id', productsController.editProduct)
router.put('/edit/:id', validateNewProduct, upload.single('img1'), productsController.updateProduct)

router.delete('/delete/:id', productsController.deleteProduct)

router.get('/cart', productsController.cart)

module.exports = router;