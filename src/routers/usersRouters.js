const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validateCreateForm = require('../middlewares/validateCreateForm');
const validateLogin = require('../middlewares/validateLogin');

const db = require('../database/models/');

const app = express()

//Requiero el paquete express-validator
const {
  validationResult,
  body
} = require('express-validator');

const userController = require('../controllers/usersControllers');
let logDBMiddleware = require('../middlewares/logDBMiddleware');

//------MULTER-----------------------------

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public/images/usuarios'));   
  },
  filename: function (req, file, cb) {
    cb(null, 'avatar' + '-' + Date.now()+ path.extname(file.originalname));      
  }
})
 
const upload = multer({ storage })

//--------ROUTERS---------------------------

//router.get('/', userController.userList)
router.get('/register', guestMiddleware, userController.register);
router.post('/register', validateCreateForm, upload.single('avatar'), logDBMiddleware, userController.createUser);

router.get('/login', userController.login)
router.post('/login', validateLogin, userController.processLogin)

// router.get('/search', userController.searchUser);

// router.get('/detail/:id', userController.detail)

 router.get('/edit/:id', userController.userEdit);
 router.put('/edit/:id', userController.userUpdate);

router.delete('/delete/:id', userController.deleteUser);

module.exports = router;