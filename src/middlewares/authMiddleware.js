const authMiddleware = (req, res, next) => {
	if (req.session.userLogOk != undefined) {
		next();
	} else {
		res.send('Esta pagina es solo para usuarios');
	}
}
module.exports = authMiddleware;


// const authenticatedValidation = (req, res, next) => { 
//     // express continue en el flujo
//     // verificar si el usuario esta autenticado
//     // Y, si esta autenticado (si quiere ingresar a /login o /registro)
//     // Redirigir al perfil (vista de usuario autenticado)

//     // Verificar si el usuario esta autenticado, con REQ.SESSION
//     if (req.session.user) {
//         // esta ruta /login mostrar
//         return res.redirect('/perfil');
//     }
//     //req.usuario = await ModeloUsuario.buscar(); 
//     return next();

// }

// module.exports = authenticatedValidation;

// //si ya estoy logueado, no deberia poder ver login, registro, recuperar contrasenia


// req.session.user = {datosDelUsuario} //cuando te logueaste o registraste recien comienza sesion del usuario


