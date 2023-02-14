const {User} = require('../database/models');
const {body} = require ('express-validator');
const bcrypt = require('bcryptjs');

const validateCreateForm = [
    body('name').notEmpty().withMessage('Debes completar el campo de nombre'),
    body('last_name').notEmpty().withMessage('Debes completar el campo de apellido'),
    body('email').notEmpty().isEmail().withMessage('Debes completar el campo de email'),
    body('phone').notEmpty().withMessage('Debes completar el campo de teléfono'),
    body('password')
            .notEmpty()
            .isLength({min: 8, max:12})
            .withMessage('Debe completar al menos 8 caracteres.')
            .custom(async function (value) {
                let userPassword = await User.findAll();
                let hasheo = 0;
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
            }),
    body('birthday').notEmpty().withMessage('Debes completar el campo de fecha de nacimiento'),
    body('genre').notEmpty().withMessage('Debes completar el campo de género')
  ];

  module.exports = validateCreateForm;
