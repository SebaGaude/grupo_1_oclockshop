const db = require("../database/models");
const Op = db.Sequelize.Op;


let productsController = {
  
    products: function (req, res) {
        db.Producto
        .findAll()
        .then(products => {
            return res.status(200).json({
                totalProducts: products.length,
                data: products.map(oneProduct => {
                    return{
                        ...oneProduct,
                        imagen: "http://localhost:3050/img/"+oneProduct.imagen
                    }
                }),
                status: 200
            }); 
        })
    },
   
    productDetail: function (req, res) { 
        db.Producto
            .findByPk(req.params.id)
            .then(product => {
                return res.status(200).json({
                data: product,
                status: 200
            });
        })
    },
     
    productCart: function (req, res) {
        res.json("");
    },
    
    
    newProduct: function (req, res) {
        db.Producto
            .findAll()
            .then(product =>{
                return res.status(200).json({
                data: product,
                status: 200,
                readyForCrete: "ok"
            });    
        })  
    },
    
    store: function (req, res) {
        db.Producto
        .create(req.body)
        .then(product => {
            return res.status(200).json({
                data: product,
                status: 200,
                created: "ok"
                })
            })
        .catch(function(e){
            console.log(e);
        })
    },

    editProduct: function(req, res){
        db.Producto
        .findByPk(req.params.id)
        .then(product =>{
            return res.status(200).json({
                data: product,
                status: 200
            })
        })      
    },
   
    updateProduct: function(req, res){
        let image;
        db.Producto
        .findByPk(req.params.id)
        .then(product => {
            image = product.imagen;
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
                },
                { 
                where: {
                id: req.params.id
                }
            });
        })
            return res.status(200).json({
                data: product,
                status: 200
            });
        //.catch(e => console.log(e))
    },

    destroy: function (req, res){
        db.Producto
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then((response)=>{
            return res.json(response)
        })   
    },

    search: function(req, res){
        db.Producto
        .findAll({
            where: {
                articulo: { [Op.like]: '%' + req.query.keyword + '%' } 
            }
        })
        .then(busqueda => {
            return res.status(200).json(busqueda);
        })
    },

    marcas: function (req, res) {
        db.Marca
        .findAll()
        .then(marca =>{
            return res.status(200).json({
            totalMarcas: marca.length,
            status: 200,
            });    
        })  
    },
    usuarios: function (req, res) {
        db.Usuario
        .findAll()
        .then(usuario =>{
            return res.status(200).json({
            totalUsuarios: usuario.length,
            status: 200,
            });    
        })  
    },
    ultimoProducto: function (req, res) {

        db.Producto.max("id").then(function(productoId){
            console.log(productoId)
            db.Producto.findByPk(productoId).then(function(ultimoProducto){
                return res.status(200).json({
                    hola: ultimoProducto,
                    status: 200,
                    })
    
            })

        })
    
        
    },

    ultimoProducto2: function (req, res) {

        
         db.Producto.max("id")
        .then(function(productoId){
            console.log(productoId)
            db.Producto.findAll()
            .then(ultimo => { console.log(ultimo)
                return res.status(200).json({
                    
                    data: ultimo.filter(oneProduct =>
                        oneProduct.id==productoId
                       
                            
                        
                    ),
                    
                    status: 200
                }); 
                
            })

        })
    }
    
};

module.exports = productsController;



