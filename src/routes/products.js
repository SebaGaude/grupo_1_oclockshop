const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require("../controllers/productsController");
const productsController = require("../controllers/productsController");

const app = express();

app.get("/producto1", productController.productDetail);


app.get("/carrito", productController.productCart);

module.exports = router;
