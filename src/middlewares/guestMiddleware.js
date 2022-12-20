const guestValidation = (req, res, next) => { 
    // express continue en el flujo
    // verificar si el usuario NO esta autenticado
    // Y, si esta autenticado (si quiere ingresar a cualquier ruta privada)
    // Redirigir al LOGIN

    if (!req.session.user) {
        // esta ruta /login mostrar
        return res.redirect('/login');
    }
    return next();

}

module.exports = guestValidation;

//los middlewares se aplican en las rutas (routers)