import React, { useState } from "react";
import React, { useEffect } from "react";
import React, { useRef } from "react";

function Main () {
    useEffect(()=>{
        console.log("Se renderizó el componente");
    },[]);
 
return(
    <h1></h1>
)
}




export default Main;