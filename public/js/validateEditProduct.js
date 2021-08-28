// // Validacion front edición producto //

const form = document.querySelector("#create-edit-form");
const articulo = document.querySelector("#articulo");
const descripcion = document.querySelector("#descripcion")
const imagenProducto = document.querySelector("#imagenProducto");
const categoria = document.querySelector("#categoria");
const numero = document.querySelector("#numero");
const marca = document.querySelector("#marca");
const precio = document.querySelector("#precio");

form.addEventListener("submit", (e)=>{
    
    
    checkInputs();



function checkInputs(){
    //get the values from the inputs
    const articulo = articulo.value.trim();
    const descripcion = descripcion.value.trim();
    const imagenProducto = imagenProducto.value.trim();
    const categoria = categoria.value.trim();
    const numero = numero.value.trim();
    const marca = marca.value.trim();
    const precio = precio.value.trim();
    const errors = []
    
    if(articulo === ""){
        setErrorFor(articulo, "Debes completar el nombre del articulo")
        errors.push("error en articulo");
    }else{
        setSuccessFor(articulo);
    }
    if(descripcion === ""){
        setErrorFor(descripcion, "Debes completar una descripción")
        errors.push("error en descripcion");
    }else{
        setSuccessFor(descripcion);
    }
    if(imagenProducto === ""){
        setErrorFor(imagenProducto, "Debes elegir una imágen de producto")
        errors.push("error en imagen");
    }else{
        setSuccessFor(imagen);
    }
    if(categoria === ""){
        setErrorFor(categoria, "Debes completar una categoría")
        errors.push("error en categoria");
    }else{
        setSuccessFor(categoria);
    }
    if(numero === ""){
        setErrorFor(numero, "Debes completar el stock del producto")
        errors.push("error en stock");
    }else{
        setSuccessFor(numero);
    }
    if(marca === ""){
        setErrorFor(marca, "Debes completar la marca del producto")
        errors.push("error en marca");
    }else{
        setSuccessFor(marca);
    }
    if(precio === ""){
        setErrorFor(precio, "Debes completar el precio del producto")
        errors.push("error en precio");
    }else{
        setSuccessFor(precio);
    }
    
    function setErrorFor(input, message){
        const tryDiv = input.parentElement; // .try class from div
        const small = tryDiv.querySelector("small");
        
        //add error message inside small tag
        small.innerText = message;
        
        // add error class
        tryDiv.className = "try error2"
    }
    
    function setSuccessFor(input){
        const tryDiv = input.parentElement;
        tryDiv.className = "try success"
    }
    if (errors.length > 0 ){
        e.preventDefault();
    }  
}   
});