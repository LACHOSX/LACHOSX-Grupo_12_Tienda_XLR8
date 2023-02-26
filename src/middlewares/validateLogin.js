const {User} = require('../database/models');
const {body} = require ('express-validator');
const bcrypt = require('bcryptjs');

const validateLogin = [
    body('email').notEmpty().isEmail().withMessage('Debes completar el campo de email'),
    body('password')
            .notEmpty()
            .isLength({min: 8, max:12})
            .withMessage('Debe completar al menos 8 caracteres.')
            .custom(async function (value) {
                let userPassword = await User.findAll();
                let hasheo;
                for (let i = 0; i<userPassword.length; i++) {
                    if (bcrypt.compareSync(value, userPassword[i].dataValues.password)) {
                        hasheo = 1;
                    } 
                }   
                if (hasheo===1) {
                    return Promise.resolve();
                } else {
                    return Promise.reject();
                }
            }).withMessage('La contraseña no es correcta')
  ];

  module.exports = validateLogin;