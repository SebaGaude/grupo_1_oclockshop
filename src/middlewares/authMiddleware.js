/*Este middleware hace que si un usuario quiere entrar al PROFILE
  y no esta logueado te redirige al LOGIN 
  Se puede visualizar en la ruta de PROFILE*/


function authMiddleware(req, res, next) {
	if (!req.session.usuarioLogueado) {
		return res.redirect('/users/login');
	}
	next();
}

module.exports = authMiddleware;