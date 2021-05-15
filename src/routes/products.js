const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController");


const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

router.get("/producto1", productsController.productDetail);

router.get("/carrito", productsController.productCart);

module.exports = router;
