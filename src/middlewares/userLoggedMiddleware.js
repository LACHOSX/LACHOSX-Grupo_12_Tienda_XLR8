const userLoggedMiddleware = (req, res, next) => {
	let isLogged = false;
    res.locals.isLogged = false;

    next();
    if (req.session.userLogOk != undefined) {
		next();
	} else {
		res.send('Esta pagina es solo para usuarios');
	}
}
module.exports = userLoggedMiddleware;