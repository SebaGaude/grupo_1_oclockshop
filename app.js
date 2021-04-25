const express = require("express");
const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/index.html"));
});

app.get("/quiz", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/quiz.html"));

});    
app.get("/producto1", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/productDetail.html"));
});

app.listen(3050, ()=>{
    console.log("Servidor corriendo en el puerto 3050");
})