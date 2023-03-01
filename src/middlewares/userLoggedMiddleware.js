const db = require('../database/models');

const User = db.User;

const userLoggedMiddleware = async function (req, res, next) {
	res.locals.isLogged = false;
        

	let emailInCookie = req.cookies.userEmail;

    if (emailInCookie) {
        let user = await User.findOne({
            where: {'email' : emailInCookie }
        });

        if (user) {
            req.session.userLogged = user
        }
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next();
};
module.exports = userLoggedMiddleware;