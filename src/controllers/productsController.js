let productsController = {
    productDetail: function(req, res){
        res.render("productDetail");
    },
    productCart: function(req, res){
        res.render("productCart");
    },

};

module.exports = productsController;