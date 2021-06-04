const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController");
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

router.get("/create", productsController.newProduct); // vista de creación
router.post("/", fileUpload.single("imagen") ,productsController.store); // lógica de creación


router.get("/edit/:id", productsController.editProduct); // vista de la edicion
router.put("/:id", productsController.updateProduct); // logica de la edicion


router.delete('/delete/:id', productsController.destroy); // lógica de delete


module.exports = router;
