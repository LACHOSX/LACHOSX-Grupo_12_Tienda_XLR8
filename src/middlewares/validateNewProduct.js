const {User} = require('../database/models');
const {body} = require ('express-validator');

const validateNewProduct = [
    body('title').notEmpty().isLength({min: 8, max:20}).withMessage('No te olvides ponerle un titulo a tu producto.'),
    body('description').notEmpty().isLength({min: 5, max:123}).withMessage('Escribe una descripcion de tu producto.'),
    body('price').notEmpty().isNumeric().withMessage('El precio es muy importante, asi sabran el valor de tu prenda.'),
    body('price_discount').notEmpty().isNumeric().withMessage('Recuerda poner el descuento en el precio, entre 0 y 100.'),
    body('size').notEmpty().withMessage('Que talle es esta prenda?'),
    body('color').notEmpty().withMessage('No te olvides elegir el color de tu articulo.'),
    body('genre_product').notEmpty().withMessage('Debes seleccionar a que genero pertenece esta prenda.'),
    body('type').notEmpty().withMessage('Debes marcar que tipo de producto es.'),
    body('new').notEmpty().withMessage('Debes marcar si el producto es Nuevo o ya existia.')
];


module.exports = validateNewProduct;