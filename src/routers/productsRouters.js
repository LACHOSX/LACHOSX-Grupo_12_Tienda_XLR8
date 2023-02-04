const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer')
const productsController = require('../controllers/productsControllers');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/productos/'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })



router.get('/create', productsController.createProduct)
router.post('/create', upload.single('img1'), productsController.storeProduct)



module.exports = router;