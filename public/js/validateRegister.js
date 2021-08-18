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
        }

        //Determinar si hay o no errores - Mostrarlos al usuario
        console.log(errors.length)
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

