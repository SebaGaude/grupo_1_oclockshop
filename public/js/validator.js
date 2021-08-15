// Validacion front register //

window.addEventListener("load", function(){

    let form = document.querySelector(".form-login-register");

    form.addEventListener("submit", function(e){
        let errors = [];
        let nombre = document.querySelector("#nombre");
        let apellido = document.querySelector("#apellido")
        let email = document.querySelector("#email");
        let imagen = document.querySelector("#imagen");
        let contraseña = document.querySelector("#contraseña");

        //nombre.focus

        if(nombre.value.length < 2){
            nombre.classList.add("is-invalid");
            nombre.classList.remove("is-valid");
            nombre.classList.remove("register-input");
            errors.push("Completá tu nombre, el mismo debe tener una extensión minima de 2 caracteres"); 
        }else{
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
            nombre.classList.remove("register-input");
            apellido.focus();
        }
        if(apellido.value == ""){
            apellido.classList.add("is-invalid");
            apellido.classList.remove("is-valid");
            apellido.classList.remove("register-input");
            errors.push("Completá tu apellido");  
        }else{
            apellido.classList.add("is-valid");
            apellido.classList.remove("is-invalid");
            apellido.classList.remove("register-input");
            email.focus();
        }
        if(email.value == ""){
            email.classList.add("is-invalid");
            email.classList.remove("is-valid");
            email.classList.remove("register-input");
            errors.push("Completá tu email");  
        }else{
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            email.classList.remove("register-input");
            imagen.focus();
        }
        if(imagen.value == ""){
            imagen.classList.add("is-invalid");
            imagen.classList.remove("is-valid");
            imagen.classList.remove("register-input");
            errors.push("Elegí una imágen");  
        }else{
            imagen.classList.add("is-valid");
            imagen.classList.remove("is-invalid");
            imagen.classList.remove("register-input");
            contraseña.focus();
        }
        if(contraseña.value.length < 8){
            contraseña.classList.add("is-invalid");
            contraseña.classList.remove("is-valid");
            contraseña.classList.remove("register-input");
            errors.push("Ingresá una contraseña, la misma debe tener una extensión minima de 8 caracteres");  
        }else{
            contraseña.classList.add("is-valid");
            contraseña.classList.remove("is-invalid");
            contraseña.classList.remove("register-input");
            contraseña.focus();
        }

        //Determinar si hay o no errores - Mostrarlos al usuario
        if(errors.length > 0){
            e.preventDefault();

            let msjError = document.querySelector("#error-nombre");
            msjError.innerHTML = "";

            for (let i = 0; i < errors.length; i++) {
                msjError.innerHTML += `<li>${errors[i]}</li>`   
            }

        }else{
            alert("Validación exitosa");
            form.submit();
        }
    })
})

// Validacion front login //

window.addEventListener("load", function(){

    let form = document.querySelector(".form-login-register");

    form.addEventListener("submit", function(e){
        let errorsLogin = [];
        let email = document.querySelector("#email");
        let contraseña = document.querySelector("#contraseña");

        //email.focus

        if(email.value == ""){
            email.classList.add("is-invalid");
            email.classList.remove("is-valid");
            email.classList.remove("login-input");
            errorsLogin.push("Debes ingresar un email");  
        }else{
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            email.classList.remove("login-input");
            contraseña.focus();
        }
        if(contraseña.value == ""){
            contraseña.classList.add("is-invalid");
            contraseña.classList.remove("is-valid");
            contraseña.classList.remove("login-input");
            errorsLogin.push("Debes ingresar una contraseña");  
        }else{
            contraseña.classList.add("is-valid");
            contraseña.classList.remove("is-invalid");
            contraseña.classList.remove("login-input");
            contraseña.focus();
        }

        //Determinar si hay o no errores - Mostrarlos al usuario

        if(errorsLogin.length > 0){
            e.preventDefault();

            let messageError = document.querySelector("#errorLogin");
            messageError.innerHTML = "";

            for (let i = 0; i < errorsLogin.length; i++) {
                messageError.innerHTML += `<li>${errorsLogin[i]}</li>`   
            }

        }else{
            alert("Validación exitosa");
            form.submit();
        }
    })
})

// Validacion front creación producto //

window.addEventListener("load", function(){

    let form = document.querySelector(".productsCreateForm");

    form.addEventListener("submit", function(e){
        let errorsCreate = [];
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
            errorsCreate.push("Debes ingresar un nombre con una extension minima de 5 caracteres para el articulo");  
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
            errorsCreate.push("Debes ingresar una descripción con una extension minima de 20 caracteres para el articulo");  
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
            errorsCreate.push("Debes seleccionar una imagen para el articulo");  
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
            errorsCreate.push("Debes ingresar una categoría para el articulo");  
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
            errorsCreate.push("Debes ingresar una cantidad para el articulo");  
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
            errorsCreate.push("Debes ingresar una marca para el articulo");  
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
            errorsCreate.push("Debes ingresar un precio para el articulo");  
        }else{
            precio.classList.add("is-valid");
            precio.classList.remove("is-invalid");
            precio.classList.remove("login-input");
        }
        //Determinar si hay o no errores - Mostrarlos al usuario
        console.log(errorsCreate)
        if(errorsCreate.length > 0){
            e.preventDefault();

            let messageError = document.querySelector("#errorsCreate");
            messageError.innerHTML = "";

            for (let i = 0; i < errorsCreate.length; i++) {
                messageError.innerHTML += `<li>${errorsCreate[i]}</li>`   
            }

        }else{
            alert("Campos completados exitosamente");
            form.submit();
        }
    })
})

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