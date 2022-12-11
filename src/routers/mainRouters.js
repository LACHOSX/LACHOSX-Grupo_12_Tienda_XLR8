// defini que ruta va hacia que controlador
const express = require('express');
const router = express.Router();

// importo el controlador
const mainControllers = require('../controllers/mainControllers');

// quiero un metodo de mainControllers
router.get('/', mainControllers.renderHome)
// elegi cual metodo de mainController

router.get('/contacto', mainControllers.contact)

router.get('/terminos', mainControllers.terms)


module.exports = router;

// el controlador no quiero exportar, solo el router que internamente hace la redireccion


