const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

router.get("/", productsController.products); // vista listado de productos

router.get("/detail/:id", productsController.productDetail); // vista de detalle

router.get("/carrito", productsController.productCart);

router.get("/create", productsController.newProduct); // vista de creación
router.post("/", productsController.store); // lógica de creación


router.get("/edit/:id", productsController.editProduct); // vista de la edicion
router.put("/:id", productsController.updateProduct); // logica de la edicion


router.delete('/:id', productsController.destroy); // lógica de delete


module.exports = router;
