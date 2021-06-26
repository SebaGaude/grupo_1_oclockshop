/*Este middleware hace que si un usuario logueado 
y quiere ingresar al LOGIN o al REGISTER
lo redirecciona al PERFIL sin la posibilidad de ingresar al
 REGISTER O LOGIN, se puede visualizar en las RUTAS de LOGIN y REGISTER */


function guestMiddleware(req, res, next) {
	console.log(req.session.usuarioLogueado);
	if (req.session.usuarioLogueado) {
		return res.redirect('/users/profile');
	}
	next();
}

module.exports = guestMiddleware;