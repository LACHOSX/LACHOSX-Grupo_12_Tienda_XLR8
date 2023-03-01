// ******** REQUIRE'S ******** //

const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser')
const multer  = require('multer')
const logMiddleware = require('./middlewares/logMiddleware');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')
//const rememberMiddleware = require('./middlewares/rememberMiddleware');
//const adminMiddleware = require('./middlewares/adminMiddleware');



// ******** EXPRESS () - (dont touch) ******** //
const app = express();

// ******** Middlewares - (dont touch) ******** //
app.use(logMiddleware);

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false})); //por que no se usa {extended: false} ??

app.use(methodOverride('_method')); //metodo para SOBRE-ESCRIBIR el metodo original del formulario (PUT o DELETE)
app.use(session({
    secret : "ES UN SECRETO!",
    resave: false,
    saveUninitialized: false,
}))

app.use(cookies());

app.use(userLoggedMiddleware);
//app.use(rememberMiddleware);
//app.use(adminMiddleware);

// app.use(logger('dev'));

// ******** Template Engine - (dont touch) ******** //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views')); //define la ubicacion

// ******** WRITE YOUR CODE FROM HERE ******** //
// ******** Route System require and use () ******** //
const mainRouters = require('./routers/mainRouters');
const productsRouters = require('./routers/productsRouters');
const usersRouters = require('./routers/usersRouters');

app.use(express.json());
app.use('/', mainRouters);
app.use('/products', productsRouters);
app.use('/users', usersRouters);


// VISTA ERROR 404
app.use((req, res, next) => {
     res.status(404).render('not-found')
})

const port = process.env.PORT || 9558;

app.listen(port, () => {
    console.log(`servidor ${port} funcionando`)
})