const db = require ("../database/models");

let mainController = {
    //mostrar página principal----------------------
    index: function (req, res){
        db.Categoria
        .findAll()
        .then(categorias =>{
            return res.render("index", {categorias})
        })     
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
    //mostrar formulario de "trabajá con nosotros"--------------------
    workwithus: function(req, res){
        res.render("workwithus");
    },
    //mostrar formulario de ayuda--------------------
    help: function(req, res){
        res.render("help");
    },
    //mostrar vista de "conocénos"--------------------
    aboutus: function(req, res){
        res.render("aboutus");
    },
    //mostrar la vista de categorías
    categories: function(req, res){
        let listadoCategorias = db.Categoria.findByPk(req.params.id);
        let listadorMarcas = db.Marca.findAll();
        let listadoProductos = db.Producto.findAll();

        Promise.all([listadoCategorias, listadorMarcas, listadoProductos])
        
        .then(function([categorias, marcas, productos]){
        
            res.render("categories", {categorias, marcas, productos});
            
        })   

    },

    cartLogin: function(req, res){
        res.render("cartLogin")
    }

};

module.exports = mainController;