const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

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
router.post('/create', upload.single('img1'), validateNewProduct, productsController.storeProduct)

router.get('/detail/:id', productsController.productDetail)

router.get('/edit/:id', productsController.editProduct)
router.put('/edit/:id', validateNewProduct, upload.single('img1'), productsController.updateProduct)

router.delete('/delete/:id', productsController.deleteProduct)

router.get('/cart', productsController.cart)

module.exports = router;