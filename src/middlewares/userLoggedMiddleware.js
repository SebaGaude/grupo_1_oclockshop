// ESTE MIDDLEWARE DE APLICACIONSIRVE PARA SABER SI HAY UN USUARIO LOGUEADO, Y MOSTRAR LOS ACCESOS A LAS 
// PAGINAS DE LOGIN Y REGISTRA O NO, SEGUN CORRESPONDA

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	if (req.cookies) {
		let emailInCookie = req.cookies.recordame;
		var userFromCookie = User.findOne('email', emailInCookie);
	}
	if (userFromCookie) {
		req.session.usuarioLogueado = userFromCookie;
	}

	if (req.session.usuarioLogueado) {
		res.locals.isLogged = true;
		res.locals.usuarioLogueado = req.session.usuarioLogueado;
	}

	next();
}

module.exports = userLoggedMiddleware;