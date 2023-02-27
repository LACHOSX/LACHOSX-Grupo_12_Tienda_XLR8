const adminMiddleware = (req, res, next) => {
    if(req.cookies.userCategory == 1){
        res.locals = true;
        next();
    } else {
        return res.redirect('/')
    }
} 
module.exports = adminMiddleware;