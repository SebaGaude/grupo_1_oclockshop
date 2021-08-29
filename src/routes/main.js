const express = require("express");
const router = express.Router();
const path = require("path");
const mainController = require("../controllers/mainController");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

router.get("/", mainController.index);

router.get("/quiz", mainController.quiz);  

router.get("/register", mainController.register);

router.get("/login", mainController.login);

router.get("/terminos", mainController.terminos);

router.get("/privacidad", mainController.privacidad);

router.get("/categories/:id", mainController.categories);

router.get("/workwithus", mainController.workwithus)

router.get("/help", mainController.help)

router.get("/aboutus", mainController.aboutus)

router.get("/cartLogin", mainController.cartLogin)

module.exports = router;