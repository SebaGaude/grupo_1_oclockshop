const express = require("express");
const path = require("path");
const routesMain = require("./routes/main");
const routesProducts = require("./routes/products");
const routesApi = require("./routes/api");
const routesUsers = require("./routes/users");
const cookies = require("cookie-parser");
const session = require("express-session");
const methodOverride = require("method-override");
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const recordameMiddleware = require('./middlewares/recordameMiddleware');
const cors = require("cors");

const app = express();


const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));
app.use(session( {secret: "Mensaje secreto", resave: false, saveUninitialized: true} ));
app.use(cors());


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middleware de aplicacion

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cookies());
app.use(recordameMiddleware);
app.use(userLoggedMiddleware);


app.use("/", routesMain);
app.use("/products", routesProducts);
app.use("/users", routesUsers);
app.use("/api", routesApi);



app.listen(3050, ()=>{
    console.log("Servidor corriendo en el puerto 3050");
})