const { validationResult } = require("express-validator");
const db = require ("../database/models");
const fs = require("fs")
const path = require("path")


let productsController = {
    
    products: function (req, res) {
        let listadoCategorias = db.Categoria.findAll();
        let listadoMarcas = db.Marca.findAll();
        let listadoProductos = db.Producto.findAll();

        Promise.all([listadoCategorias, listadoMarcas, listadoProductos])

        .then(function([categorias, marcas, productos]){
        
            res.render("products", {categorias, marcas, productos});
        
        })

    },
    productDetail: function (req, res) {
    
        let listadoCategorias = db.Categoria.findAll();
        let listadorMarcas = db.Marca.findAll();
        let productoId = db.Producto.findByPk(req.params.id)

        Promise.all([listadoCategorias, listadorMarcas, productoId])
        
        .then(function([categorias, marcas, product]){
        
            res.render("productDetail", {categorias, marcas, product});
        
        })
    },


    newProduct: function (req, res) {
        
        let listadoCategorias = db.Categoria.findAll();
        let listadorMarcas = db.Marca.findAll();
        
        Promise.all([listadoCategorias, listadorMarcas])
        
        .then(function([categorias, marcas]){
        
        res.render("newProduct", {categorias , marcas});
            
        })
        
        },
    
    store: function (req, res) {

        let listadoCategorias = db.Categoria.findAll();
        let listadorMarcas = db.Marca.findAll();
        
        let errors = validationResult(req);        
        
        if(errors.isEmpty()){
        db.Producto.create({
            
            articulo: req.body.articulo,
            descripcion: req.body.descripcion,
            id_categoria: req.body.categoria,
            stock: req.body.stock,
            imagen: req.file.filename,
            id_marca: req.body.marca,
            precio: req.body.precio
        
        })
    
        res.redirect("/");}
        else{
            Promise.all([listadoCategorias, listadorMarcas])
        
            .then(function([categorias, marcas]){
            
            res.render("newProduct", {categorias , marcas,
    
            errors: errors.mapped(),
                oldData: req.body
            });
        })
        }
            
    },

    editProduct: function(req, res){
        
        let listadoCategorias = db.Categoria.findAll();
        let listadorMarcas = db.Marca.findAll();
        let productoId = db.Producto.findByPk(req.params.id)

        Promise.all([listadoCategorias, listadorMarcas, productoId])
        
        .then(function([categorias, marcas, product]){
        
            res.render("editProduct", {categorias, marcas, product});
            
        })   
        
    },

    updateProduct: function(req, res){
        
        let listadoCategorias = db.Categoria.findAll();
        let listadorMarcas = db.Marca.findAll();
        let productoId = db.Producto.findByPk(req.params.id)
        
        
        let errors = validationResult(req);
    
        let image;
        if(errors.isEmpty()){
            db.Producto.findByPk(req.params.id)
            .then(producto => {
                image = producto.imagen;
                if (req.file) {
                    image = req.file.filename;
                }
                db.Producto.update ({
                    articulo: req.body.articulo,
                    descripcion: req.body.descripcion,
                    id_categoria: req.body.categoria,
                    stock: req.body.stock,
                    imagen: image,
                    id_marca: req.body.marca,
                    precio: req.body.precio
                },{ where: {
                    id: req.params.id}
                });
            }).catch(e => console.log(e))
            
            return res.redirect("/");
        } else {
            
            Promise.all([listadoCategorias, listadorMarcas, productoId])
        
            .then(function([categorias, marcas, product]){
        
            res.render("editProduct", {categorias, marcas, product,
            
                errors: errors.mapped(),
                oldData: req.body
            });
            })
        }
    
    
    },

    
    destroy: function (req, res){

        db.Producto.destroy ({
            where: {
                id: req.params.id}
    
        })
    return res.redirect('/');
    },

    search: function(req, res){
        let searched = req.query.search;
        let searchedProducts = []

        let listadoCategorias = db.Categoria.findAll();
        let listadoMarcas = db.Marca.findAll();
        let listadoProductos = db.Producto.findAll();



        Promise.all([listadoCategorias, listadoMarcas, listadoProductos])

        .then(function([categorias, marcas, productos]){
            for(let i = 0; i < productos.length; i++){
                if (productos[i].articulo.toLowerCase().includes(searched.toLowerCase())){
                    searchedProducts.push(productos[i])
                }};  

                res.render("search",{categorias, marcas, searchedProducts, productos, searched})
        })

    },


    carrito: function(req, res){
        let addedProduct = req.params.id;
        let cantidad = req.body.cantidad; 
        let carritoUsuario = "carritoId" + (req.session.usuarioLogueado.id).toString() + ".json";
        let carritoDatabase;
        let carrito;
        let foundProduct = [];


        if(!path.join(__dirname, "../data/carritos/" + carritoUsuario) == false){
            fs.appendFileSync(path.join(__dirname, "../data/carritos/" + carritoUsuario), "", function (err) {
                if (err) throw err;
                console.log('Saved!')})
            }
            
        carritoDatabase = fs.readFileSync(path.join(__dirname, "../data/carritos/" + carritoUsuario), { encoding: "utf-8" });

        if (carritoDatabase == ""){
            carrito = []
        } else {carrito = JSON.parse(carritoDatabase)}

        
        let listadoProductos = db.Producto.findAll();

        Promise.all([listadoProductos])

        .then(function([productos]){


            foundProduct = productos.find(item => item.id == addedProduct)
            
            let boughtProduct = {
                id: foundProduct.id,
                articulo: foundProduct.articulo,
                precio: foundProduct.precio,
                imagen: foundProduct.imagen,
                cantidad: cantidad,
            }

            carrito.push(boughtProduct)


            carrito = JSON.stringify(carrito, null, 4);
            fs.writeFileSync(path.join(__dirname, "../data/carritos/" + carritoUsuario), carrito);
<<<<<<< HEAD
            
            res.redirect("/")
=======

            res.redirect("/products/carrito")

            
>>>>>>> 437e16caac45b984634aec34bc50502d46bdbedc
        })

    },

    destroyItemCarrito: function (req, res){
        let carritoUsuario = "carritoId" + (req.session.usuarioLogueado.id).toString() + ".json";
        let eliminado = fs.readFileSync(path.join(__dirname, "../data/carritos/" + carritoUsuario), { encoding: "utf-8" });
        eliminado = JSON.parse(eliminado);
        let eliminaProducto = eliminado.filter(elimina => elimina.id != req.params.id)
        eliminaProducto = JSON.stringify(eliminaProducto, null, 4);

        fs.writeFileSync(path.join(__dirname, "../data/carritos/" + carritoUsuario), eliminaProducto);
        
        
        res.redirect('/products/carrito');
    },
    
    productCart: function (req, res) {
        let carritoUsuario = "carritoId" + (req.session.usuarioLogueado.id).toString() + ".json";
        let carritoDatabase = fs.readFileSync(path.join(__dirname, "../data/carritos/" + carritoUsuario), { encoding: "utf-8" });
        let carrito
        if (carritoDatabase == ""){
            carrito = []
            } else {carrito = JSON.parse(carritoDatabase)}
        res.render("productCart", {carrito});
    },


};

module.exports = productsController;





/*productsController con JSON*/

/*const fs = require("fs");
const path = require("path");


let productsController = {
  
    products: function (req, res) {
        res.render("products");
    },
   
   
    productDetail: function (req, res) {
       
        let productsDatabase = fs.readFileSync(path.join(__dirname, "../data/productsDataBase.json"), { encoding: "utf-8" });
        products = JSON.parse(productsDatabase);
        oneProduct = products.find(product => req.params.id == product.id);
        res.render("productDetail", {"product": oneProduct});
    },
    
    
    productCart: function (req, res) {
        res.render("productCart");
    },
    
    newProduct: function (req, res) {
        res.render("newProduct");
    },
    
    store: function (req, res) {

        let productsDatabase = fs.readFileSync(path.join(__dirname, "../data/productsDataBase.json"), { encoding: "utf-8" });
        let products;
        if (productsDatabase == ""){
            products = [];
        } else {
            products = JSON.parse(productsDatabase);
        }
        const lastID = () => {
            let ultimo = 0;
            products.forEach(oneProduct => {
                if (ultimo < oneProduct.id) {
                    ultimo = oneProduct.id;
                }
            });
            return ultimo;
        }

        let oneProduct = {
            id: lastID() + 1,
            articulo: req.body.articulo,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            stock: req.body.stock,
            imagen: req.file.filename,
            marca: req.body.marca,
            precio: req.body.precio
        }

        products.push(oneProduct);

        products = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.join(__dirname, "../data/productsDataBase.json"), products);

        res.redirect("/");

    },
   
    editProduct: function(req, res){
        
        let products = fs.readFileSync(path.join(__dirname, "../data/productsDataBase.json"), { encoding: "utf-8" });
        products = JSON.parse(products)
        let product = products.find(product => product.id == req.params.id);
        res.render("editProduct", {product});
    },
   
   
    updateProduct: function(req, res){
       
        
        let idProduct = req.params.id;
        let productsDatabase = fs.readFileSync(path.join(__dirname, "../data/productsDataBase.json"), { encoding: "utf-8" });
        let products=JSON.parse(productsDatabase);
        
         products.forEach(product =>{
            if(product.id == idProduct){
                product.articulo = req.body.articulo;
                product.descripcion = req.body.descripcion;
                product.categoria = req.body.categoria;
                product.stock = req.body.stock;
                product.marca = req.body.marca;
                product.precio = req.body.precio;
            }
        });
            // console.log(products);

        let newList = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.join(__dirname, "../data/productsDataBase.json"), newList);
        
        res.redirect("/");
    },

    
    destroy: function (req, res){
        let products = fs.readFileSync(path.join(__dirname, "../data/productsDataBase.json"), { encoding: "utf-8" });
        products = JSON.parse(products);
        let newProducts = products.filter(product => product.id != req.params.id)
        newProducts = JSON.stringify(newProducts, null, 4);

        fs.writeFileSync(path.join(__dirname, "../data/productsDataBase.json"), newProducts);
        
        res.redirect('/');
    }

};

module.exports = productsController;*/