const authMiddleware = (req, res, next) => {
	if (req.session.userLogged != undefined) {
		next();
	} else {
		return res.redirect('users/login');
	}
}
module.exports = authMiddleware;

