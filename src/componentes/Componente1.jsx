import React from "react";
import './componente1.css';



function Componente1({latitude,temperatura}){
    return <>
        <div id="lateral">
        <p>Uno</p>
        <p>{latitude}</p>
        <p>{temperatura[3]}</p>
        {/*<p>{hourly.temperature_2m}</p>*/}
        </div>
    </>
}
export default Componente1;