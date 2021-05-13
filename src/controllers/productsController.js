let productController = {
    productDetail: function(req, res){
        res.sendFile(path.resolve(__dirname,"./views/productDetail.html"));
    },
    productCart: function(req, res){
        res.sendFile(path.resolve(__dirname,"./views/productCart.html"));
    },

};

module.exports = productController;