const path = require('path');
const { body } = require('express-validator');

const validateUserRegister = [
    body("nombre").notEmpty().withMessage("Debes completar el campo nombre").bail().isLength({min:2}).withMessage("Deben ser como mínimo 2 caracteres"),
    body("apellido").notEmpty().withMessage("Debes completar el campo apellido"),
    body("email").notEmpty().withMessage("Debes completar con un email").bail().isEmail().withMessage("Debes completar un formato de email válido"),
    body("contraseña").notEmpty().withMessage("Debes elegir una contraseña").bail().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).withMessage("La contraseña debe tener como minimo 8 caracteres, incluyendo una mayuscula, una minuscula, un numero y alguno de los siguientes caracteres #?!@$%^&*-"),
    //body("confirmar").notEmpty().withMessage("Debes completar nuevamente la contraseña elegida"),
   
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
]

module.exports = validateUserRegister;