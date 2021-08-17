window.addEventListener("load", function(){

    let form = document.querySelector(".form-login-register");

    
    let errorNombre = document.querySelector("#error-nombre")
 
    //nombre.addEventListener("focus", function(){
    //    nombre.classList.add("is-invalid");
    //})


    //form.nombre.focus();

    form.addEventListener("submit", function(e){
        let errors = [];
        let nombre = document.querySelector("#nombre");
        let apellido = document.querySelector("#apellido")
        let email = document.querySelector("#email");
        let imagen = document.querySelector("#imagen");
        let contraseña = document.querySelector("#contraseña");


        if(nombre.value.length < 1){
            nombre.style.border = "solid 3px #842029";
            nombre.focus();
            errors.push("Completá tu nombre");   
        }
        if(apellido.value.length < 1){
            apellido.style.border = "solid 3px #842029";
            apellido.focus();
            errors.push("Completá tu apellido");  
        }
        if(email.value.length < 1){
            email.style.border = "solid 3px #842029";
            email.focus();
            errors.push("Completá tu email");  
        }
        if(imagen.value.length < 1){
            imagen.style.border = "solid 3px #842029";
            imagen.focus();
            errors.push("Elegí una imágen");  
        }
        if(contraseña.value.length < 1){
            contraseña.style.border = "solid 3px #842029";
            contraseña.focus();
            errors.push("Ingresá una contraseña");  
        }

        //Determinar si hay o no errores - Mostrarlos al usuario

        if(errors.length > 0){
            e.preventDefault();
            let msjError = document.querySelector("#msjError");
            //msjError.classList.add("alert-warning");
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