
// Validacion front edición producto //

window.addEventListener("load", function(){

    let form = document.querySelector(".formulario-edicion-creacion");

    form.addEventListener("submit", function(e){
        let errorsEdit = [];
        let articulo = document.querySelector("#articulo");
        let descripcion = document.querySelector("#descripcion");
        let imagenProducto = document.querySelector("#imagenProducto");
        let categoria = document.querySelector("#categoria");
        let numero = document.querySelector("#numero");
        let marca = document.querySelector("#marca");
        let precio = document.querySelector("#precio");

        //email.focus

        if(articulo.value.length < 5){
            articulo.classList.add("is-invalid");
            articulo.classList.remove("is-valid");
            articulo.classList.remove("login-input");
            errorsEdit.push("Debes ingresar un nombre con una extension minima de 5 caracteres para el articulo");  
        }else{
            articulo.classList.add("is-valid");
            articulo.classList.remove("is-invalid");
            articulo.classList.remove("login-input");
            descripcion.focus();
        }
        if(descripcion.value.length < 20){
            descripcion.classList.add("is-invalid");
            descripcion.classList.remove("is-valid");
            descripcion.classList.remove("login-input");
            errorsEdit.push("Debes ingresar una descripción con una extension minima de 20 caracteres para el articulo");  
        }else{
            descripcion.classList.add("is-valid");
            descripcion.classList.remove("is-invalid");
            descripcion.classList.remove("login-input");
            imagenProducto.focus();
        }
        if(imagenProducto.value == ""){
            imagenProducto.classList.add("is-invalid");
            imagenProducto.classList.remove("is-valid");
            imagenProducto.classList.remove("login-input");
            errorsEdit.push("Debes seleccionar una imagen para el articulo");  
        }else{
            imagenProducto.classList.add("is-valid");
            imagenProducto.classList.remove("is-invalid");
            imagenProducto.classList.remove("login-input");
            categoria.focus();
        }
        if(categoria.value == ""){
            categoria.classList.add("is-invalid");
            categoria.classList.remove("is-valid");
            categoria.classList.remove("login-input");
            errorsEdit.push("Debes ingresar una categoría para el articulo");  
        }else{
            categoria.classList.add("is-valid");
            categoria.classList.remove("is-invalid");
            categoria.classList.remove("login-input");
            numero.focus();
        }
        if(numero.value == ""){
            numero.classList.add("is-invalid");
            numero.classList.remove("is-valid");
            numero.classList.remove("login-input");
            errorsEdit.push("Debes ingresar una cantidad para el articulo");  
        }else{
            numero.classList.add("is-valid");
            numero.classList.remove("is-invalid");
            numero.classList.remove("login-input");
            marca.focus();
        }
        if(marca.value == ""){
            marca.classList.add("is-invalid");
            marca.classList.remove("is-valid");
            marca.classList.remove("login-input");
            errorsEdit.push("Debes ingresar una marca para el articulo");  
        }else{
            marca.classList.add("is-valid");
            marca.classList.remove("is-invalid");
            marca.classList.remove("login-input");
            precio.focus();
        }
        if(precio.value == ""){
            precio.classList.add("is-invalid");
            precio.classList.remove("is-valid");
            precio.classList.remove("login-input");
            errorsEdit.push("Debes ingresar un precio para el articulo");  
        }else{
            precio.classList.add("is-valid");
            precio.classList.remove("is-invalid");
            precio.classList.remove("login-input");
        }
        //Determinar si hay o no errores - Mostrarlos al usuario
        console.log(errorsEdit)
        if(errorsEdit.length > 0){
            e.preventDefault();

            let messageError = document.querySelector("#errorsEdit");
            messageError.innerHTML = "";

            for (let i = 0; i < errorsEdit.length; i++) {
                messageError.innerHTML += `<li>${errorsEdit[i]}</li>`   
            }

        }else{
            alert("Campos completados exitosamente");
            form.submit();
        }
    })
})