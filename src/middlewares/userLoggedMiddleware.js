// ESTE MIDDLEWARE DE APLICACIONSIRVE PARA SABER SI HAY UN USUARIO LOGUEADO, Y MOSTRAR LOS ACCESOS A LAS 
// PAGINAS DE LOGIN Y REGISTRA O NO, SEGUN CORRESPONDA

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	// let emailInCookie = req.cookies.recordame;
	// let userFromCookie = User.findByField('email', emailInCookie);

	// if (userFromCookie) {
	// 	req.session.userLogged = userFromCookie;
	// }

	if (req.session.usuarioLogueado) {
		res.locals.isLogged = true;
		res.locals.usuarioLogueado = req.session.usuarioLogueado;
	}

	next();
}

module.exports = userLoggedMiddleware;