const form = document.querySelector(".form-login-register");
const articulo = document.querySelector("#articulo");
const descripcion = document.querySelector("#descripcion");
const imagenProducto = document.querySelector("#imagenProducto");
const categoria = document.querySelector("#categoria");
const numero = document.querySelector("#numero");
const marca = document.querySelector("#marca");
const precio = document.querySelector("#precio");

form.addEventListener("submit", (e)=>{
    
    
    checkInputs();



    function checkInputs(){
        //get the values from the inputs
        const nombreArticulo = articulo.value.trim();
        const descripcionArticulo = descripcion.value.trim();
        const unaImagenProducto = imagenProducto.value.trim();
        const categoriaProducto = categoria.value.trim();
        const numeroStock = numero.value.trim();
        const marcaArticulo = marca.value.trim();
        const precioArticulo = precio.value.trim();
        const errors = []
        
        if(nombreArticulo === ""){
            setErrorFor(articulo, "Debes completar el nombre")
            errors.push("error en nombreArticulo");
        }else{
            setSuccessFor(articulo);
        }
        if(descripcionArticulo === ""){
            setErrorFor(descripcion, "Debes completar una descripcion")
            errors.push("error en descripcionArticulo");
        }else{
            setSuccessFor(descripcion);
        }
        if(unaImagenProducto === ""){
            setErrorFor(imagenProducto, "Debes elegir una imágen")
            errors.push("error en unaImagenProducto");
        }else{
            setSuccessFor(imagenProducto);
        }
        if(categoriaProducto === ""){
            setErrorFor(categoria, "Debes elegir una categoría")
            errors.push("error en categoriaProducto");
        }else{
            setSuccessFor(categoria);
        }
        if(numeroStock === ""){
            setErrorFor(numero, "Debes completar el stock")
            errors.push("error en password");
        }else{
            setSuccessFor(numero);
        }
        if(marcaArticulo === ""){
            setErrorFor(marca, "Debes elegir una marca")
            errors.push("error en marcaArticulo");
        }else{
            setSuccessFor(marca);
        }
        if(precioArticulo === ""){
            setErrorFor(precio, "Debes elegir un precio")
            errors.push("error en precioArticulo");
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






// // Validacion front creación producto //

// window.addEventListener("load", function(){

//     let form = document.querySelector(".productsCreateForm");

//     form.addEventListener("submit", function(e){
//         let errorsCreate = [];
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
//             errorsCreate.push("Debes ingresar un nombre con una extension minima de 5 caracteres para el articulo");  
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
//             errorsCreate.push("Debes ingresar una descripción con una extension minima de 20 caracteres para el articulo");  
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
//             errorsCreate.push("Debes seleccionar una imagen para el articulo");  
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
//             errorsCreate.push("Debes ingresar una categoría para el articulo");  
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
//             errorsCreate.push("Debes ingresar una cantidad para el articulo");  
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
//             errorsCreate.push("Debes ingresar una marca para el articulo");  
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
//             errorsCreate.push("Debes ingresar un precio para el articulo");  
//         }else{
//             precio.classList.add("is-valid");
//             precio.classList.remove("is-invalid");
//             precio.classList.remove("login-input");
//         }
//         //Determinar si hay o no errores - Mostrarlos al usuario
//         console.log(errorsCreate)
//         if(errorsCreate.length > 0){
//             e.preventDefault();

//             let messageError = document.querySelector("#errorsCreate");
//             messageError.innerHTML = "";

//             for (let i = 0; i < errorsCreate.length; i++) {
//                 messageError.innerHTML += `<li>${errorsCreate[i]}</li>`   
//             }

//         }else{
//             alert("Campos completados exitosamente");
//             form.submit();
//         }
//     })
// })
