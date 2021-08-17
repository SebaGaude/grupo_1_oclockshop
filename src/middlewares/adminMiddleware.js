const db = require ("../database/models");

function adminMiddleware (req, res, next){
    next();
    
    if(req.session.usuarioLogueado.perfil != 'administrador'){
        
    }
}

module.exports = adminMiddleware;