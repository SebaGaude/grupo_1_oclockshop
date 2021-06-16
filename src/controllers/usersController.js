const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

let usersControllers = {

    //mostrar formulario login------------
    login: function(req, res){
        res.render("login");
    },
    //mostrar formulario register------------
    register: function (req, res){
        res.render("register");
    },
    //Procesar la ruta POST del register
    processRegister: function(req, res){
        let errors = validationResult(req);

       if(errors.isEmpty()){
            let usersDatabase = fs.readFileSync(path.join(__dirname, "../data/usersDataBase.json"), {encoding: "utf-8"});
            let users;
            if(usersDatabase == ""){
                users = [];
            }else{
                users = JSON.parse(usersDatabase);
            }
        const lastID=() => {
            let ultimo = 0;
            users.forEach(user=>{
            if (ultimo<user.id){
                ultimo = user.id;
            }
            });
            return ultimo;
            }
            let user = {
                id: lastID()+1,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                avatar: req.file.filename,
                contraseña: bcrypt.hashSync(req.body.contraseña, 10),
            }
            users.push(user);
 
            users = JSON.stringify(users, null, 4);
            
            fs.writeFileSync(path.join(__dirname, "../data/usersDataBase.json"), users); 

            res.redirect("/");

        }else{
        res.render("register", {
            errors: errors.mapped(),
            oldData: req.body
        });
       }
    },
    //Procesar la ruta POST del login
    processLogin: function(req, res){
        let errors = validationResult(req);

        if(errors.isEmpty()){
            let usersJson = fs.readFileSync(path.join(__dirname, "../data/usersDatabase.json"), {encoding: "utf-8"});
            let users;
            if(usersJson == ""){
                users = [];
            }else{
                users = JSON.parse(usersJson);
            }
            let usuarioALoguearse;
            
            for(let i = 0; i<users.length; i++){
                if(users[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.contraseña, users[i].contraseña)){
                        usuarioALoguearse = users[i];
                        break;
                    }
                }
            }
            if(usuarioALoguearse == undefined){
                return res.render("login", {errors: [
                    {msg: "Credenciales inválidas"}
                ]});
            }
            req.session.usuarioLogueado =  usuarioALoguearse;

            if(req.body.recordame != undefined){
                res.cookie("recordame", usuarioALoguearse.email, { maxAge: 60000 });

            }

            res.render("/");

        }else{
            res.render("login", {errors: errors.errors})
        }

    },


}

    module.exports = usersControllers;
