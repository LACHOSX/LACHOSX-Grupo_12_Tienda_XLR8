const {User} = require('../database/models');
const {body} = require ('express-validator');

const validateCreateForm = [
    body('name').notEmpty().withMessage('Debes completar tu nombre'),
    body('last_name').notEmpty().withMessage('Debes completar tu apellido'),    
    body('email').notEmpty().isEmail().withMessage('Debes completar tu email')
    .custom(async value => {
        let userEmail = await User.findOne({
            where: { 'email': value }
        })
        if (userEmail !== null) {
            return Promise.reject();
          }
    }).withMessage("El email ya se encuentra registrado."),
    body('phone').notEmpty().withMessage('Debes completar tu teléfono'),
    body('password')
            .notEmpty()
            .isLength({min: 8, max:12})
            .withMessage('Tu contraseña debe tener al menos 8 caracteres.'),            
    body('birthday').notEmpty().withMessage('Queremos saber cuando naciste'),
    body('genre').notEmpty().withMessage('Como te percibes?')
  ];

  module.exports = validateCreateForm;
