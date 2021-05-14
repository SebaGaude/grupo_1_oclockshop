let productsController = {
    products: function(req, res){
        res.render("products");
    },
    productDetail: function(req, res){
        res.render("productDetail");
    },
    productCart: function(req, res){
        res.render("productCart");
    },
    newProduct: function(req, res){
        res.render("newProduct");
    },
    editProduct: function(req, res){
        res.render("editProduct");
    },

};

module.exports = productsController;