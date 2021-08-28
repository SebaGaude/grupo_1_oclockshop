const form = document.querySelector(".form-login-register");
const email = document.querySelector("#email");
const contraseña = document.querySelector("#contraseña");

form.addEventListener("submit", (e)=>{
    
    
    checkInputs();



function checkInputs(){
    //get the values from the inputs
    const emailUsuario = email.value.trim();
    const contraUsuario = contraseña.value.trim();
    const errors = []
    


    if(emailUsuario === ""){
        setErrorFor(email, "Debes completar tu email")
        errors.push("error en email");
    }else if(!isEmail(emailUsuario)){
        setErrorFor(email, "Completa un formato válido de email")
        errors.push("error en email");
    }else{
        setSuccessFor(email);
    }

    if(contraUsuario === ""){
        setErrorFor(contraseña, "Debes elegir una contraseña")
        errors.push("error en password");
    }else if(!isPassword(contraUsuario)){
        setErrorFor(contraseña, "La contraseña debe tener como minimo 8 caracteres, incluyendo una mayuscula, una minuscula, un numero y alguno de los siguientes caracteres #?!@$%^&*-")
        errors.push("error en password");
    }else{
        setSuccessFor(contraseña);
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

    function isEmail(email){
        return /\S+@\S+\.\S+/.test(email);
    }
    
    function isPassword(contraseña){
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(contraseña);
    }
    if (errors.length > 0 ){
        e.preventDefault();
    }  
}   
});

// // Validacion front login //

// window.addEventListener("load", function(){

//     let form = document.querySelector(".form-login-register");

//     form.addEventListener("submit", function(e){
//         let errorsLogin = [];
//         let email = document.querySelector("#email");
//         let contraseña = document.querySelector("#contraseña");

//         //email.focus

//         if(email.value == ""){
//             email.classList.add("is-invalid");
//             email.classList.remove("is-valid");
//             email.classList.remove("login-input");
//             errorsLogin.push("Debes ingresar un email");  
//         }else{
//             email.classList.add("is-valid");
//             email.classList.remove("is-invalid");
//             email.classList.remove("login-input");
//             contraseña.focus();
//         }
//         if(contraseña.value == ""){
//             contraseña.classList.add("is-invalid");
//             contraseña.classList.remove("is-valid");
//             contraseña.classList.remove("login-input");
//             errorsLogin.push("Debes ingresar una contraseña");  
//         }else{
//             contraseña.classList.add("is-valid");
//             contraseña.classList.remove("is-invalid");
//             contraseña.classList.remove("login-input");
//             contraseña.focus();
//         }

//         //Determinar si hay o no errores - Mostrarlos al usuario

//         if(errorsLogin.length > 0){
//             e.preventDefault();

//             let messageError = document.querySelector("#errorLogin");
//             messageError.innerHTML = "";

//             for (let i = 0; i < errorsLogin.length; i++) {
//                 messageError.innerHTML += `<li>${errorsLogin[i]}</li>`   
//             }

//         }else{
//             alert("Validación exitosa");
//             form.submit();
//         }
//     })
// })
