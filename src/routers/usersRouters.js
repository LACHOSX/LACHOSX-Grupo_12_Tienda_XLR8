const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

const userController = require('../controllers/usersControllers');
let logDBMiddleware = require('../middlewares/logDBMiddleware');

//------MULTER-----------------------------

app.post('/register', upload.single('avatar'), function (req, res, next) {
    // req.file es el archivo del `avatar`
    // req.body contendrá los campos de texto, si los hubiera.
  })
app.post('/public/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files es el arreglo (array) de archivos `photos`
    // req.body contendrá los campos de texto, si los hubiera.
  })
const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
  app.post('/cool-profile', cpUpload, function (req, res, next) {
})

router.get('/', userController.userList)

router.get('/register', userController.register);
router.post('/register', upload.single('avatar'), logDBMiddleware, userController.createUser);

// router.get('/login', userController.loginUser)
// router.post('/', verificarUsuario, upload.single('image'), userController.login)

// router.get('/search', userController.searchUser);

router.get('/detail/:id', userController.detail)

router.get('/edit/:id', userController.userEdit);
// router.put('/edit/:id', userController.userUpdate);

router.delete('/delete/:id', userController.deleteUser);

module.exports = router;