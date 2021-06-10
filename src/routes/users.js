const express = require('express');
const router = express.Router();
/*const guestMiddleware = require('../../middlewares/guestMiddleware');*/
// el guestMiddleeare verifica si el usuario esta logueado para redirigirlo o no.
/*const authMiddleware = require ('../../middlewares/authMiddleware');*/
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/img/users');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });

// Formulario de registro
router.get('/register',guestMiddleware, usersController.register);

// Procesar el registro
router.post('/register', /*uploadFile.single('avatar'),*/ validations, usersController.processRegister);

// Formulario de login
router.get('/login',guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', usersController.loginProcess);


// Perfil de Usuario
router.get('/profile/',authMiddleware, usersController.profile);

// Logout
router.get('/logout/', usersController.logout);

module.exports = router;