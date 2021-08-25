const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController");

// middlewares
const createEditProductMiddleware = require("../middlewares/createEditProductMiddleware");
const adminMiddleware = require('../middlewares/adminMiddleware');

const multer = require("multer");

//---------------MULTER-----------------------
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, path.join(__dirname, "../../public/img"));
    },
    filename:(req, file, cb)=>{
        const imageName = "product-" + Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
})
const fileUpload = multer({ storage: storage });

router.get("/", productsController.products); // vista listado de productos


router.get("/detail/:id", productsController.productDetail); // vista de detalle

router.get("/carrito", productsController.productCart);
router.post("/detail/:id", productsController.carrito) // logica de agregado de producto al carrito

router.get("/create", adminMiddleware, productsController.newProduct); // vista de creación
router.post("/", fileUpload.single("imagen"), createEditProductMiddleware, productsController.store); // lógica de creación


router.get("/edit/:id", adminMiddleware, productsController.editProduct); // vista de la edicion
router.put("/:id",fileUpload.single("imagen"), createEditProductMiddleware, productsController.updateProduct); // logica de la edicion


router.delete('/delete/:id', productsController.destroy); // lógica de delete

router.get("/search", productsController.search) // logica de barra de busqueda



module.exports = router;
