const { body } = require('express-validator');

const validateUserLogin = [
    body("email").notEmpty().withMessage("Debes completar con un email").bail().isEmail().withMessage("Debes completar un formato de email válido"),
    body("contraseña").notEmpty().withMessage("Debes elegir una contraseña"),
    //body("confirmar").notEmpty().withMessage("Debes completar nuevamente la contraseña elegida"),
];

module.exports = validateUserLogin