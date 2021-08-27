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
// // Validacion front edición producto //

// window.addEventListener("load", function(){

//     let form = document.querySelector(".formulario-edicion-creacion");

//     form.addEventListener("submit", function(e){
//         let errorsEdit = [];
//         let articulo = document.querySelector("#articulo");
//         let descripcion = document.querySelector("#descripcion");
//         let imagenProducto = document.querySelector("#imagenProducto");
//         let categoria = document.querySelector("#categoria");
//         let numero = document.querySelector("#numero");
//         let marca = document.querySelector("#marca");
//         let precio = document.querySelector("#precio");

//         //email.focus

//         if(articulo.value.length < 5){
//             articulo.classList.add("is-invalid");
//             articulo.classList.remove("is-valid");
//             articulo.classList.remove("login-input");
//             errorsEdit.push("Debes ingresar un nombre con una extension minima de 5 caracteres para el articulo");  
//         }else{
//             articulo.classList.add("is-valid");
//             articulo.classList.remove("is-invalid");
//             articulo.classList.remove("login-input");
//             descripcion.focus();
//         }
//         if(descripcion.value.length < 20){
//             descripcion.classList.add("is-invalid");
//             descripcion.classList.remove("is-valid");
//             descripcion.classList.remove("login-input");
//             errorsEdit.push("Debes ingresar una descripción con una extension minima de 20 caracteres para el articulo");  
//         }else{
//             descripcion.classList.add("is-valid");
//             descripcion.classList.remove("is-invalid");
//             descripcion.classList.remove("login-input");
//             imagenProducto.focus();
//         }
//         if(imagenProducto.value == ""){
//             imagenProducto.classList.add("is-invalid");
//             imagenProducto.classList.remove("is-valid");
//             imagenProducto.classList.remove("login-input");
//             errorsEdit.push("Debes seleccionar una imagen para el articulo");  
//         }else{
//             imagenProducto.classList.add("is-valid");
//             imagenProducto.classList.remove("is-invalid");
//             imagenProducto.classList.remove("login-input");
//             categoria.focus();
//         }
//         if(categoria.value == ""){
//             categoria.classList.add("is-invalid");
//             categoria.classList.remove("is-valid");
//             categoria.classList.remove("login-input");
//             errorsEdit.push("Debes ingresar una categoría para el articulo");  
//         }else{
//             categoria.classList.add("is-valid");
//             categoria.classList.remove("is-invalid");
//             categoria.classList.remove("login-input");
//             numero.focus();
//         }
//         if(numero.value == ""){
//             numero.classList.add("is-invalid");
//             numero.classList.remove("is-valid");
//             numero.classList.remove("login-input");
//             errorsEdit.push("Debes ingresar una cantidad para el articulo");  
//         }else{
//             numero.classList.add("is-valid");
//             numero.classList.remove("is-invalid");
//             numero.classList.remove("login-input");
//             marca.focus();
//         }
//         if(marca.value == ""){
//             marca.classList.add("is-invalid");
//             marca.classList.remove("is-valid");
//             marca.classList.remove("login-input");
//             errorsEdit.push("Debes ingresar una marca para el articulo");  
//         }else{
//             marca.classList.add("is-valid");
//             marca.classList.remove("is-invalid");
//             marca.classList.remove("login-input");
//             precio.focus();
//         }
//         if(precio.value == ""){
//             precio.classList.add("is-invalid");
//             precio.classList.remove("is-valid");
//             precio.classList.remove("login-input");
//             errorsEdit.push("Debes ingresar un precio para el articulo");  
//         }else{
//             precio.classList.add("is-valid");
//             precio.classList.remove("is-invalid");
//             precio.classList.remove("login-input");
//         }
//         //Determinar si hay o no errores - Mostrarlos al usuario
//         console.log(errorsEdit)
//         if(errorsEdit.length > 0){
//             e.preventDefault();

//             let messageError = document.querySelector("#errorsEdit");
//             messageError.innerHTML = "";

//             for (let i = 0; i < errorsEdit.length; i++) {
//                 messageError.innerHTML += `<li>${errorsEdit[i]}</li>`   
//             }

//         }else{
//             alert("Campos completados exitosamente");
//             form.submit();
//         }
//     })
// })