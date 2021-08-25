/*Este middleware hace que si un usuario no es administrador 
y quiere editar o crear un producto
lo redirecciona al index */

function adminMiddleware(req, res, next) {

	if ((req.session.usuarioLogueado && usuarioLogueado.perfil != 'Administrador') || !req.session.usuarioLogueado) {
		return res.redirect('/');
	}
	next();
}

module.exports = adminMiddleware;