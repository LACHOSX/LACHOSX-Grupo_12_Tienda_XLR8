// defini que ruta va hacia que controlador
const express = require('express');
const router = express.Router();

// importo el controlador
const mainController = require('../controllers/mainController');

// quiero un metodo de mainController
router.get('/', mainController.renderHome)
// elegi cual metodo de mainController

router.get('/contacto', mainController.contactanos)

router.get('/terminos', mainController.terminos)


module.exports = router;

// el controlador no quiero exportar, solo el router que internamente hace la redireccion


