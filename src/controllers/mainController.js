const path = require('path');
const productos = require('../data/productos.json');
    
const secciones = {
    ofertas: {
        ids: [1,2,3,4]
    },
    novedades: {
        ids: [5,6,7,8]
    },
}

const renderHome = (req, res) => {
    res.render('./index', {
        ofertas: productos.filter(producto => secciones.ofertas.ids.includes(producto.id)),
        novedades: productos.filter(producto => secciones.novedades.ids.includes(producto.id)),
        catalogo: productos.slice(-8),
    })
}

const contactanos = (req, res) => {
    res.render('./contacto')
}

const terminos = (req, res) => {
    res.render('./terminos')
}

module.exports = {renderHome, contactanos, terminos};