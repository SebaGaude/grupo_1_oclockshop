// // Validacion front login //

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


