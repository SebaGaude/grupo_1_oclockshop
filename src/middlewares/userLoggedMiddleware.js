// ESTE MIDDLEWARE DE APLICACIONSIRVE PARA SABER SI HAY UN USUARIO LOGUEADO, Y MOSTRAR LOS ACCESOS A LAS 
// PAGINAS DE LOGIN Y REGISTRA O NO, SEGUN CORRESPONDA
const db = require("../database/models")


function userLoggedMiddleware(req, res, next) {

	res.locals.isLogged = false;

	if (req.cookies) {
		let emailInCookie = req.cookies.recordame;
		db.Usuario.findOne({
			where: {email: emailInCookie}
		})
		.then(function(userFromCookie){
			req.session.usuarioLogueado = userFromCookie

		})}

	if (req.session.usuarioLogueado) {
		res.locals.isLogged = true;
		res.locals.usuarioLogueado = req.session.usuarioLogueado;
	}
return next();
}


	

/*	if (userFromCookie) {
		req.session.usuarioLogueado = userFromCookie;
	}
*/	
module.exports = userLoggedMiddleware;