const rememberMiddleware = async function (req, res, next) {
	next();
	
	if (req.cookies.remember_user != undefined && req.session.userLogged == undefined) {

		let userDb = await db.User.findAll(req.params.email)
        		let userLog;
			if( userDb == "") {
				userLog = [];
			} else {
				userLog = db.User;
			}
		
			for (let i = 0; i < userDb.length; i ++) {
				if (userDb[i].email == req.cookies.recordame) {
					let userToLog = userDb[i];
					break;
				}
			}

			req.session.userLogged = userToLog;
	}

}
module.exports = rememberMiddleware;