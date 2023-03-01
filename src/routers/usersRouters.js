const express = require('express');
const router = express.Router();
const path = require('path');
const app = express()

const guestMiddleware = require('../middlewares/guestMiddleware');
const validateCreateForm = require('../middlewares/validateCreateForm');
const validateLogin = require('../middlewares/validateLogin');

const userController = require('../controllers/usersControllers');

//--------ROUTERS---------------------------

router.get('/', userController.userList)

router.get('/register', guestMiddleware, userController.register);
router.post('/register', validateCreateForm, userController.createUser);

router.get('/login', guestMiddleware, userController.login)
router.post('/login', validateLogin, userController.processLogin)

router.get('/profile', userController.profile)

router.get('/edit/:id', userController.userEdit);
router.put('/edit/:id', userController.userUpdate);

router.delete('/delete/:id', userController.deleteUser);

router.get('/logout', userController.logout);

router.get('/list', userController.userList);

module.exports = router;