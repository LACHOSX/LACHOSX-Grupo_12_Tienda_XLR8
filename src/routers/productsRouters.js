const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

const authMiddleware = require('../middlewares/authMiddleware'); //va tambien este middleware ??
const adminMiddleware = require('../middlewares/adminMiddleware');

const validateNewProduct = require('../middlewares/validateNewProduct');
const productsController = require('../controllers/productsControllers');

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
// debemos agregar adminMiddleware en la ruta CREATE PRODUCT
router.post('/create', upload.single('img1'), validateNewProduct, productsController.storeProduct)

router.get('/detail/:id', productsController.productDetail)

router.get('/edit/:id', productsController.editProduct)
// debemos agregar adminMiddleware en la ruta EDIT PRODUCT
router.put('/edit/:id', validateNewProduct, upload.single('img1'), productsController.updateProduct)

router.delete('/delete/:id', productsController.deleteProduct)
// debemos agregar adminMiddleware en la ruta DELETE PRODUCT

router.get('/cart', productsController.cart)

module.exports = router;