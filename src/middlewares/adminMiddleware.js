const authenticatedValidation = (req, res, next) => { 
    // express continue en el flujo
    // verificar si el usuario esta autenticado
    // Y, si esta autenticado (si quiere ingresar a /login o /registro)
    // Redirigir al perfil (vista de usuario autenticado)

    // Verificar si el usuario esta autenticado, con REQ.SESSION
    if (req.session.user.role !='admin') {
        // esta ruta /login mostrar
        return res.redirect('/perfil');
    }
    //req.usuario = await ModeloUsuario.buscar(); 
    return next();

}

module.exports = authenticatedValidation;