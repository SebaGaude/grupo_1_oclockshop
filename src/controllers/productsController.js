const db = require ("../database/models")



let productsController = {
  
    products: function (req, res) {
        res.render("products");
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
    
    
    productCart: function (req, res) {
        res.render("productCart");
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

        db.Producto.create({

      
            
            articulo: req.body.articulo,
            descripcion: req.body.descripcion,
            id_categoria: req.body.categoria,
            stock: req.body.stock,
            //imagen: req.file.filename,
            id_marca: req.body.marca,
            precio: req.body.precio
        
        })
       

        res.redirect("/");

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
       
        db.Producto.update ({
            articulo: req.body.articulo,
            descripcion: req.body.descripcion,
            id_categoria: req.body.categoria,
            stock: req.body.stock,
            //imagen: req.file.filename,
            id_marca: req.body.marca,
            precio: req.body.precio
        },{ where: {
            id: req.params.id}
        
        });

         return res.redirect("/");
    },

    
    destroy: function (req, res){

        db.Producto.destroy ({
            where: {
                id: req.params.id}
      
         })
    return res.redirect('/');}
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