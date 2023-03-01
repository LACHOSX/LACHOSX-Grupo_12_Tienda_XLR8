const adminMiddleware = (req, res, next) => {
    if(req.cookies.userCategory == 1){
        res.locals.isAdmin = true;
        next();
    } else {
        return res.redirect('/')
    }
} 
module.exports = adminMiddleware;



// const {User} = require('../database/models')

// const adminMiddleware = async function (req, res, next) {
// 	res.locals.isAdmin = false;

// 	let emailInCookie = req.cookies.userEmail;
// 	if(!emailInCookie) {
// 		return next()
// 	}
// 	let userFromCookie = await User.findOne({
// 		where: {
// 			'email': emailInCookie}
// 		});

// 	if (userFromCookie) {
// 		req.session.userLogged = userFromCookie;
// 	}

// 	if (req.session.userLogged) {
// 		res.locals.isAdmin = true;
// 		res.locals.userLogged = req.session.userLogged;

// 	}

//     next();
    
// }
// module.exports = adminMiddleware;