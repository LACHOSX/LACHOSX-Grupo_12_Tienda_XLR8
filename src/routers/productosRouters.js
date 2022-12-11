const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer')
const productsController = require('../controllers/productsControllers');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/products'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage })

router.get('/', productsController.productsList)

router.get('/create', productsController.createProduct)
router.post('/create', upload.single('img1'), productsController.storeProduct)

router.get('/detail/:id', productsController.productDetail)

router.get('/edit/:id', productsController.editProduct)
router.put('/edit/:id', productsController.updateProduct)

router.delete('/delete/:id', productsController.deleteProduct)

router.get('/carrito', productsController.cart)

module.exports = router;