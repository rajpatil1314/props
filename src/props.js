import React from "react";

      function Propsdata ({src,height,width,title}) {
        return(
        <div>
        
        <img src={src} height={height} width={width}  style={{borderRadius : '50%' , padding : '0px 10px'}}></img> 
        <h1>{title}</h1>
  
        </div>
        )
    }
    export default Propsdata