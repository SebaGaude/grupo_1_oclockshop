const db = require ("../database/models");

function recordameMiddleware (req, res, next){
    if (req.cookies != undefined && req.cookies.recordame){
        if(req.cookies != undefined && req.session.usuarioLogueado == undefined){
            db.Usuario.findOne({
                where: {email : req.cookies.recordame}
            })
            .then(function(usersDatabase){
                req.session.usuarioLogueado = usersDatabase
            })
        }
    }
    res.locals.usuarioLogueado =  req.session.usuarioLogueado;
    next();
}

module.exports = recordameMiddleware;
// let usersJson = fs.readFileSync(path.join(__dirname, "../data/usersDatabase.json"), {encoding: "utf-8"});

// let users;
// if(usersJson == ""){
//     users = [];
// }else{
//     users = JSON.parse(usersJson);
// }
// let usuarioALoguearse;

// for(let i = 0; i<users.length; i++){
//     if(users[i].email == req.cookies.recordame){
//         usuarioALoguearse = users[i];
//         break;  
//     }
// }