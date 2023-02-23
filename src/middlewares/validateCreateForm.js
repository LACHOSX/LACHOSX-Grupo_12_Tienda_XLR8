const {User} = require('../database/models');
const {body} = require ('express-validator');
const bcrypt = require('bcryptjs');

const validateCreateForm = [
    body('name').notEmpty().withMessage('Debes completar tu nombre'),
    body('last_name').notEmpty().withMessage('Debes completar tu apellido'),    
    body('email').notEmpty().isEmail().withMessage('Debes completar tu email'),
    body('phone').notEmpty().withMessage('Debes completar tu teléfono'),
    body('password')
            .notEmpty()
            .isLength({min: 8, max:12})
            .withMessage('Tu contraseña debe tener al menos 8 caracteres.').bail()
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
    body('birthday').notEmpty().withMessage('Queremos saber cuando naciste'),
    body('genre').notEmpty().withMessage('Como te percibes?')
  ];

  module.exports = validateCreateForm;
