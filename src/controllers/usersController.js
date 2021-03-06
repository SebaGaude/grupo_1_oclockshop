const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require ("../database/models")

const fs = require("fs")
const path = require("path");

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
           
                db.Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                imagen: req.file.filename,
                contraseña: bcrypt.hashSync(req.body.contraseña, 10),
            })
            

            res.redirect("/");

          }else{
        res.render("register", {
            errors: errors.mapped(),
            oldData: req.body
        });
       }
    },
    //*******************Procesar la ruta POST del login******************** 
     processLogin: function(req, res){
       
        let errors = validationResult(req);

        if(errors.isEmpty()){       
            let user;
            let usuarioALoguearse = db.Usuario.findAll()
                .then((users) =>{ 
                    for(let i = 0; i<users.length; i++){
                        if(users[i].email == req.body.email){
                        if(bcrypt.compareSync(req.body.contraseña, users[i].contraseña)){
                            usuarioALoguearse = users[i];
                            user=usuarioALoguearse;
                             break;         
                            }
                        }
                    }
                    if(user == undefined){
                        return res.render('login', {
                            errors: {
                                email: {
                                    msg: 'Las credenciales son inválidas'
                                }
                            }
                        });
                    }
                    req.session.usuarioLogueado =  user;
                
                    if(req.body.recordarme){
                        res.cookie("recordame", usuarioALoguearse.email, { maxAge: 10*10*60000 })
                    }
                
                    res.redirect('/users/profile')

                });
    
        }else{
            res.render("login", {
                errors: errors.mapped(),
                oldData: req.body
            });
        }

    },
    
    profile: function(req, res){
        return res.render('userProfile', {
			user: req.session.usuarioLogueado
		});
    },
    editProfile: function(req, res){
        return res.render("editUserProfile", {user: req.session.usuarioLogueado})
        
    },

    updateProfile: function(req, res){
            let image;
            db.Usuario.findByPk(req.params.id)
            .then(usuario => {
              image = usuario.imagen;
              if (req.file) {
                  image = req.file.filename;
              }
              
        db.Usuario.update ({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            imagen: image,
            contraseña: bcrypt.hashSync(req.body.contraseña, 10),
        },{ where: {
            id: req.params.id}
        });

        return res.redirect("/");
    
    }).catch(e => console.log(e))
    },
    destroy: function(req, res){
        db.Usuario.destroy ({
            where: {id: req.params.id}
        })
        res.localstorage.clear()
        res.clearCookie('recordame');
        req.logout()
		req.session.destroy(); /*borra todo lo que esta en SESSION*/
        res.redirect('/');
    },
 
    logout: function(req, res){
		res.clearCookie('recordame');
		req.session.destroy(); /*borra todo lo que esta en SESSION*/
		res.redirect('/');
        console.log(req.session)
	}
    


};

    module.exports = usersControllers;




 /*--------------back up del USER CONTROLLER con JSON------------------------------------*/

/* const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const db = require ("../database/models");

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
           
                return res.render('login', {
                    errors: {
                        email: {
                            msg: 'Las credenciales son inválidas'
                        }
                    }
                });
           
            }
            
            /*el usuario logueado con todos sus datos queda en req.session.usuarioLogueado */
            /*req.session.usuarioLogueado =  usuarioALoguearse;
            
            if(req.body.recordarme){
               
                
                res.cookie("recordame", usuarioALoguearse.email, { maxAge: 60000 });

            }

            /*si esta bien logueado va al profile*/
            /*    res.redirect("/users/profile");

        }else{
            res.render("login", {
                errors: errors.mapped(),
                oldData: req.body
            });
        }

    },
    
    profile: function(req, res){
        return res.render('userProfile', {
			user: req.session.usuarioLogueado
		});
    },
    editProfile: function(req, res){
        
        let userId = db.Usuario.findByPk(req.params.id)

        // Promise.all(userId)
        
        .then(function(user){
        
            res.render("editUserProfile", {user: user});
            
        })        
        
    },
    updateProfile: function(req, res){
       
        db.Usuario.update ({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
        },{ where: {
            id: req.params.id}
        
        });

         return res.redirect("/");
    },
    
    logout: function(req, res){
		res.clearCookie('userEmail');
		req.session.destroy(); /*borra todo lo que esta en SESSION*/
	/*	res.redirect('/');
	}


}

    module.exports = usersControllers;*/
