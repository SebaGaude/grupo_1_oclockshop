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
