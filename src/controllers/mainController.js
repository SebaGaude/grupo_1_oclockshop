let mainController = {
    //mostrar página principal----------------------
    index: function (req, res){
        res.render("index");
    },
    //mostrar formulario de login----------------------
    login: function(req, res){
        res.render("login");
    },
    //mostrar formulario de registro----------------------
    register: function(req, res){
        res.render("register");
    },
    //mostrar formulario de quiz----------------------
    quiz: function(req, res){
        res.render("quiz");
    },
    //mostrar terminos y condiciones----------------------
    terminos: function(req, res){
        res.render("terminos");
    },
    //mostrar politica de privacidad----------------------
    privacidad: function(req, res){
        res.render("privacidad");
    },
};

module.exports = mainController;