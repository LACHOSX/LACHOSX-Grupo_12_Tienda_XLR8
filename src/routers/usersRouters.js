const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const db = require('../database/models/');

const bcrypt = require('bcryptjs');
const fs = require('fs');

const app = express()

//Requiero el paquete express-validator
const {
  check,
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

//--------------------------------------------

//router.get('/', userController.userList)

router.get('/register', userController.register);
router.post('/register', upload.single('avatar'), logDBMiddleware, userController.createUser);

router.get('/login', userController.loginUser)
router.post('/', verificarUsuario, upload.single('image'), userController.login)

// router.get('/search', userController.searchUser);

// router.get('/detail/:id', userController.detail)

 router.get('/edit/:id', userController.userEdit);
 router.put('/edit/:id', userController.userUpdate);

// router.delete('/delete/:id', userController.deleteUser);

module.exports = router;