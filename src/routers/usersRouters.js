const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersControllers');

router.get('/', userController.userList)
router.get('/register', userController.register);
router.post('/register', userController.createUser);

router.get('/login', userController.loginUser)
router.post('/mostrarNumeroSession', userController.login)

router.get('/search', userController.searchUser);

router.get('/detail/:id', userController.detail)

router.get('/edit/:id', userController.userEdit);
router.put('/edit/:id', userController.userUpdate);

router.delete('/delete/:id', userController.deleteUser);

module.exports = router;