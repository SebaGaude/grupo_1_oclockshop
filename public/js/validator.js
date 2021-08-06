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
            nombre.classList.add("is-invalid");
            errors.push("Este campo debe estar completo");  
        }else{
            nombre.classList.remove("is-invalid");
            nombre.classList.add("is-valid");
            form.apellido.focus();
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