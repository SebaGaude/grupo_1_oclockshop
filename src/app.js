const express = require("express");
const path = require("path");
const routesMain = require("./routes/main");
const routesProducts = require("./routes/products");

const app = express();

const { start } = require("repl");

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));
 

app.listen(3050, ()=>{
    console.log("Servidor corriendo en el puerto 3050");
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", routesMain);
app.use("/products", routesProducts);