const express = require('express');
const path = require("path");
const router = express.Router();
const usersController = require("../controllers/usersController");


const { body } = require('express-validator');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/img/users"));

    },
    filename: (req, file, cb) => {
        const fileName = "user-" + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
})
const uploadFile = multer({ storage: storage });

// Middlewares

const guestMiddleware = require('../middlewares/guestMiddleware'); // el guestMiddleeare verifica si el usuario esta logueado para redirigirlo o no.
const authMiddleware = require('../middlewares/authMiddleware');
const validateUserRegister = require('../middlewares/validateUserRegister');
const validateUserLogin = require('../middlewares/validateUserLogin');

// Formulario de registro
router.get('/register',guestMiddleware, usersController.register);

// Procesar el registro
router.post('/register', uploadFile.single('imagen'), validateUserRegister, usersController.processRegister);

// Formulario de login
router.get('/login',guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', validateUserLogin, usersController.processLogin);


// Perfil de Usuario
router.get('/profile', authMiddleware,usersController.profile);

// Edicion de Usuario
router.get('/profile/edit/:id', usersController.editProfile); // vista edicion del usuario
// router.post ('/profile/edit/:id', usersController.updateProfile); // logica edicion del usuario

// Logout
router.get('/logout', usersController.logout);

module.exports = router;