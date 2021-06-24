const express = require('express');
const path = require("path");
const router = express.Router();
const usersController = require("../controllers/usersController");
/*const guestMiddleware = require('../../middlewares/guestMiddleware');*/
// el guestMiddleeare verifica si el usuario esta logueado para redirigirlo o no.
/*const authMiddleware = require ('../../middlewares/authMiddleware');*/
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

//-------VALIDACIONES---------
const validateUserRegister = [
    body("nombre").notEmpty().withMessage("Debes completar el campo nombre"),
    body("apellido").notEmpty().withMessage("Debes completar el campo apellido"),
    body("email").notEmpty().withMessage("Debes completar con un email").bail().isEmail().withMessage("Debes completar un formato de email válido"),
    body("contraseña").notEmpty().withMessage("Debes elegir una contraseña"),
    //body("confirmar").notEmpty().withMessage("Debes completar nuevamente la contraseña elegida"),
    body("avatar").custom((value, {req})=>{
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".gif"];
        
        if(!file){
            throw new Error("Tienes que subir una imágen");
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);

        }


        }
        return true;
    })
]
const validateUserLogin = [
    body("email").notEmpty().withMessage("Debes completar con un email").bail().isEmail().withMessage("Debes completar un formato de email válido"),
    body("contraseña").notEmpty().withMessage("Debes elegir una contraseña"),
    //body("confirmar").notEmpty().withMessage("Debes completar nuevamente la contraseña elegida"),
];

// Middlewares

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');



// Formulario de registro
router.get('/register', usersController.register);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validateUserRegister, usersController.processRegister);

// Formulario de login
router.get('/login',guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', validateUserLogin, usersController.processLogin);


// Perfil de Usuario
router.get('/profile/', usersController.profile);

// Logout
//router.get('/logout/', usersController.logout);

module.exports = router;