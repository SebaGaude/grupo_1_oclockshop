const { body } = require('express-validator');

const createEditProductMiddleware = [
    body("articulo").notEmpty().withMessage("Debes completar el nombre del articulo").bail().isLength({min:5}).withMessage("Debe tener al menos cinco caracteres"),
    body("descripcion").notEmpty().withMessage("Debes completar este campo").bail().isLength({min:20}).withMessage("Debe tener al menos veinte caracteres"),
    
    
];

module.exports = createEditProductMiddleware