const express = require('express');
const router = express.Router();
const path = require('path');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validateCreateForm = require('../middlewares/validateCreateForm');
const validateLogin = require('../middlewares/validateLogin');

const app = express()

const userController = require('../controllers/usersControllers');
let logDBMiddleware = require('../middlewares/logDBMiddleware');

//--------ROUTERS---------------------------

router.get('/', userController.userList)

router.get('/register', guestMiddleware, userController.register);
router.post('/register', logDBMiddleware, validateCreateForm, userController.createUser);

router.get('/login', userController.login)
router.post('/login', validateLogin, userController.processLogin)

// router.get('/search', userController.searchUser);

router.get('/profile/:id', logDBMiddleware, userController.profile)

 router.get('/edit/:id', userController.userEdit);
 router.put('/edit/:id', userController.userUpdate);

router.delete('/delete/:id', userController.deleteUser);

module.exports = router;