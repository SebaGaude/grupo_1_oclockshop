window.addEventListener("load", function(){

    let form = document.querySelector(".form-login-register");

    //let errorNombre = document.querySelector("#error-nombre")

    form.addEventListener("submit", function(e){
        let errors = [];
        let nombre = document.querySelector("#nombre");
        let apellido = document.querySelector("#apellido")
        let email = document.querySelector("#email");
        let imagen = document.querySelector("#imagen");
        let contraseña = document.querySelector("#contraseña");

        //nombre.focus();

        if(nombre.value == ""){
            nombre.classList.add("is-invalid");
            nombre.classList.remove("is-valid");
            nombre.classList.remove("register-input");
            errors.push("Completá tu nombre"); 
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
        if(contraseña.value == ""){
            contraseña.classList.add("is-invalid");
            contraseña.classList.remove("is-valid");
            contraseña.classList.remove("register-input");
            errors.push("Ingresá una contraseña");  
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


window.addEventListener("load", function(){

    let form = document.querySelector(".form-login-register");

    //let errorNombre = document.querySelector("#error-nombre")

    form.addEventListener("submit", function(e){
        let errorsLogin = [];
        let email = document.querySelector("#email");
        let contraseña = document.querySelector("#contraseña");

        //nombre.focus();

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
        console.log(errorsLogin);
        console.log(errorsLogin.length);
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