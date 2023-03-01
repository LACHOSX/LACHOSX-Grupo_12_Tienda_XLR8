const express = require('express');
const router = express.Router();
const db = require('../database/models/');

const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.renderHome)

router.get('/contacto', mainControllers.contact)

router.get('/terminos', mainControllers.terms)

// router.get('/pruebaSession', function(req, res) {
// 	if (req.session.numeroVisitas == undefined) {
// 	   req.session.numeroVisitas = 0;
// 	}
// 	req.session.numeroVisitas++;
// 	req.send('Session tiene el numero: ' + req.session.numeroVisitas)
// });

module.exports = router;


