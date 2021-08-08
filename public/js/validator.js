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
            nombre.style.color = "#842029";
            errors.push("Completá tu nombre");  
        }else{
            nombre.style.border = "solid 3px #198754";
            nombre.style.color = "#198754";
            apellido.focus();
        }
        if(apellido.value.length < 1){
            apellido.style.border = "solid 3px #842029";
            apellido.style.color = "#842029";
            errors.push("Completá tu apellido");  
        }else{
            email.focus();
        }
        if(email.value.length < 1){
            email.style.border = "solid 3px #842029";
            email.style.color = "#842029";
            errors.push("Completá tu email");  
        }else{
            imagen.focus();
        }
        if(imagen.value.length < 1){
            imagen.style.border = "solid 3px #842029";
            imagen.style.color = "#842029";
            errors.push("Elegí una imágen");  
        }else{
            contraseña.focus();
        }
        if(contraseña.value.length < 1){
            contraseña.style.border = "solid 3px #842029";
            contraseña.style.color = "#842029";
            errors.push("Ingresá una contraseña");  
        }else{
            contraseña.focus();
        }

        //Determinar si hay o no errores - Mostrarlos al usuario

        if(errors.length > 0){
            e.preventDefault();
            let msjError = document.querySelector("#error-nombre");
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