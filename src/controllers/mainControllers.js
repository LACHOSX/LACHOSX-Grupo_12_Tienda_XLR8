const path = require('path');
const fs = require('fs');
const db = require("../database/models")
const toThousand = n => n.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const renderHome = async (req, res) => {
    //Aca selecciono los productos que estan en oferta
    let newProducts;
    try {
       let renderOffers = await db.Product.findAll();
       let offers = renderOffers.filter(render => render.price_discount >0)
       newProducts = await db.Product.findAll({
        where:{
            new:0
        }
       })
        res.render('./index', { offers, newProducts, toThousand });
    } catch(error) {
        console.log(error);
    }        
}

const contact = (req, res) => {
    res.render('./contacto')
}

const terms = (req, res) => {
    res.render('./terminos')
}

//Error 404
const error = (req, res) => {
    res.render("./not-found");
}

module.exports = { renderHome, contact, terms, error };