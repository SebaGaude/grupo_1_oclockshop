const path = require('path');
const { body } = require('express-validator');

const createEditProductMiddleware = [
    body("articulo").notEmpty().withMessage("Debes completar el nombre del articulo").bail().isLength({min:5}).withMessage("Debe tener al menos 5 caracteres"),
    body("descripcion").notEmpty().withMessage("Debes completar este campo").bail().isLength({min:20}).withMessage("Debe tener al menos 20 caracteres"),
    body("categoria").notEmpty().withMessage("Debes completar este campo"),
    body("stock").notEmpty().withMessage("Debes completar este campo"),
    body("marca").notEmpty().withMessage("Debes completar este campo"),
    body("precio").notEmpty().withMessage("Debes completar este campo"),
    body("imagen").custom((value, {req})=>{
        let file = req.file;
         let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
         
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
    
];

module.exports = createEditProductMiddleware