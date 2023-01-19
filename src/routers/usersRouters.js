const express = require('express');
const router = express.Router();
const multer = require('multer');

const userController = require('../controllers/usersControllers');

router.get('/', userController.userList)
router.get('/register', userController.register);
router.post('/register', userController.createUser);

// router.get('/perfil', middlewareProtection, multer, controller) 
// router.get('/agregarProducto', authMiddleware, adminMiddleware, multer, controller)

router.get('/login', userController.loginUser)
// router.post('/', verificarUsuario, upload.single('image'), userController.login)

router.get('/search', userController.searchUser);
router.get('/list', userController.userList)

router.get('/detail/:id', userController.detail)

router.get('/edit/:id', userController.userEdit);
router.put('/edit/:id', userController.userUpdate);

router.delete('/delete/:id', userController.deleteUser);

module.exports = router;