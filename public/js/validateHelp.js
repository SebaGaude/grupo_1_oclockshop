// // Validacion Ayuda //


const form = document.querySelector(".form-extras");
const email = document.querySelector(".email-ayuda");
const submit = document.querySelector(".boton-crear-cuenta")

form.addEventListener("submit", (e)=>{

    alert("¡Gracias por enviarnos tu consulta! Te enviaremos la respuesta en la brevedad");

    checkInputs();

    function checkInputs(){
        //get the values from the inputs
        
        const emailUsuario = email.value.trim();
        
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