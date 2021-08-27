/*Este middleware hace que si un usuario no es administrador 
y quiere editar o crear un producto
lo redirecciona al index */

function adminMiddleware(req, res, next) {
	    if (req.session.usuarioLogueado == undefined || (req.session.usuarioLogueado && req.session.usuarioLogueado.perfil != 'Administrador')) {
		    return res.redirect('/');
	    }
	next();
    }

module.exports = adminMiddleware;