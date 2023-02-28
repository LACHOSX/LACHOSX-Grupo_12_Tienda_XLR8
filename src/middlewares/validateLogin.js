const {User} = require('../database/models');
const {body} = require ('express-validator');


const validateLogin = [
    body('email').notEmpty().isEmail().withMessage('Debes completar el campo de email'),
    body('password')
            .notEmpty()
            .isLength({min: 8, max:12})
            .withMessage('Debe completar al menos 8 caracteres.')            
  ];

  module.exports = validateLogin;