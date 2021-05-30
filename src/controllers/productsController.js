const fs = require("fs");
const path = require("path");

let productsController = {
    products: function (req, res) {
        res.render("products");
    },
    productDetail: function (req, res) {
        let products = fs.readFileSync(path.join(__dirname, "../data/productsDataBase.json"), { encoding: "utf-8" });
        products = JSON.parse(products)
        products = products.find(product => product.id == req.params.id);
        res.render("productDetail", {products});
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
            products.foreach(product => {
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
            marca: req.body.marca,
            precio: req.body.precio
        }

        products.push(oneProduct);

        products = JSON.stringify(products, null, 4)
        fs.writeFileSync(path.join(__dirname, "../data/productsDataBase.json"), products);

        res.redirect("../routes/products.js");

    },
    editProduct: function(req, res){
        let products = fs.readFileSync(path.join(__dirname, "../data/productsDataBase.json"), { encoding: "utf-8" });
        products = JSON.parse(products)
        products = products.find(product => product.id == req.params.id);
        res.render("editProduct", {products});
    },
    updateProduct: function(req, res){
        let products = fs.readFileSync(path.join(__dirname, "../data/productsDataBase.json"), { encoding: "utf-8" });
        products = JSON.parse(products)
        products = products.find(product => product.id == req.params.id);
        res.render("editProduct", {products});
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

module.exports = productsController;