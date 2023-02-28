const {User} = require('../database/models')

const userLoggedMiddleware = async function (req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	if(!emailInCookie) {
		return next()
	}
	let userFromCookie = await User.findOne({
		where: {
			'email': emailInCookie}
		});

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;

	}

    next();
    
}
module.exports = userLoggedMiddleware;


