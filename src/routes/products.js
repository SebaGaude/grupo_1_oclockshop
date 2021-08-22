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

router.get("/", productsController.products); // todos los productos

router.get("/search", productsController.search); // buscar productos

router.get("/create", productsController.newProduct); // vista de creación

router.get("/:id", productsController.productDetail); // detalle de un producto

router.get("/carrito", productsController.productCart);

router.post("/", fileUpload.single("imagen") ,productsController.store); // crear de un producto

router.get("/edit/:id", productsController.editProduct); // vista de la edicion

router.put("/update/:id", productsController.updateProduct); // logica de la edicion************

router.delete('/delete/:id', productsController.destroy); // eliminar un producto


module.exports = router;
