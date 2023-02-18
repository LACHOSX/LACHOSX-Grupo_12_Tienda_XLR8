//requiero el path para poder usar el path de public qu eesta en app.js
const path = require('path');
//requiero el file system para poder convertir el json
const fs = require('fs');

const db = require("../database/models")
const toThousand = n => n.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// //creo una constante para poder unir el path con la ruta del json 
// const productsFilePath = path.join(__dirname, '../data/products.json');
// //creo una constante para guardar en ella el json convertido y que javascript lo pueda entender
// const products = JSON.parse(fs.readFileSync(productsFilePath, { encoding: 'utf-8' }));
// //sirve para limitar los 0 detras de la coma y que no quede feo a la vista o con muchos decimales
// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//aca renderizo el index de la pagina. 
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
    // let offers = products.filter(product => product.discount != 0)
    // //Aca les doy una categoria de nuevos o no y los separo para mostrar en el index
    // let newProducts = products.filter(product => {
    //     if (product.new == "true" || product.new == true) {
    //         return product
    //     }
    // })
    //en esta linea mando las dos variables con los filtros ya aplicados para poder mostrar lo que yo quiero en el index
    
}

const contact = (req, res) => {
    res.render('./contacto')
}

const terms = (req, res) => {
    res.render('./terminos')
}

module.exports = { renderHome, contact, terms };