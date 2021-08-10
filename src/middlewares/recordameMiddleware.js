const db = require ("../database/models");

function recordameMiddleware (req, res, next){
    next();
    
    if(req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined){
        let usersDatabase = db.Usuario.findOne({
            where: {email : req.cookies.recordame}
        })
        .then(
            usuarioALoguearse = usersDatabase
        )
    }
    req.session.usuarioLogueado =  usuarioALoguearse;
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