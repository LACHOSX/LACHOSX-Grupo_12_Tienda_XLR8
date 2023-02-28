const db = require('../database/models');

const User = db.User;

const userLoggedMiddleware = async function (req, res, next) {
	res.locals.isLogged = false;
    let userLogged = false;
    console.log(userLogged)

	if(req.cookies.userEmail){
        userLogged = req.cookies.userEmail;
   	   }
    	   else if(req.session.userLogged){
           userLogged = req.session.userLogged
     	   }
    
    try{
        if(userLogged){
            let user = await User.findOne({
                where: {
                    email: userLogged
                }
            });

            req.session.userLogged = user;
            console.log(user)
            console.log(req.session.userLogged)
            
            if (req.session.userLogged) {
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged;
            }
            // if(req.cookies.userCategory == 2){
            //     res.locals.isAdmin = true;
            // }
        }
    }    
    catch(errorMsg){
        res.redirect('/');
    }
    next();
};
module.exports = userLoggedMiddleware;