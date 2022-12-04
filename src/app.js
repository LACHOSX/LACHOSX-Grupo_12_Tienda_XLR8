// ******** REQUIRE'S ******** //

const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');

// ******** EXPRESS () - (dont touch) ******** //
const app = express();


// ******** Middlewares - (dont touch) ******** //
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded()); //por que no se usa {extended: false} ??
app.use(methodOverride('_method')); //metodo para SOBRE-ESCRIBIR el metodo original del formulario (PUT o DELETE)
app.use(session({secret: "ES UN SECRETO!"}));

// ******** Template Engine - (dont touch) ******** //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views')); //define la ubicacion

// ******** WRITE YOUR CODE FROM HERE ******** //
// ******** Route System require and use () ******** //
const mainRouters = require('./routers/mainRouters');
const productosRouters = require('./routers/productosRouters');
const usuariosRouters = require('./routers/usuariosRouters');

app.use(express.json());
app.use('/', mainRouters);
app.use('/productos', productosRouters);
app.use('/usuario', usuariosRouters);

// VISTA ERROR 404
app.use((req, res, next) => {
    res.status(404).render('not-found')
})


const port = process.env.PORT || 9558;

app.listen(port, () => {
    console.log(`servidor ${port} funcionando`)
})
