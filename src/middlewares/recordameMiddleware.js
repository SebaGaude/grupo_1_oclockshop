function recordameMiddleware (req, res, next){
    next();
    
    if(req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined){
        let usersDatabase = db.Usuario.findOne({
            where: {email : req.cookies.recordame}
        })
        .then(
            usuarioALoguearse = usersDatabase
        )
    }
    req.session.usuarioLogueado =  usuarioALoguearse;
}

module.exports = recordameMiddleware;