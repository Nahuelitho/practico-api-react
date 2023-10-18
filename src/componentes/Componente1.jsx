import React from "react";
import './componente1.css';



function Componente1({latitude,temperatura}){
    return <>
        <div id="lateral">
        <div className="div">Latitud:<p>{latitude}</p></div>
        <div className="div">Temperatura:<p>{temperatura[3]}</p></div>
        <div className="div">Tres</div>
        {/*<p>{hourly.temperature_2m}</p>*/}
        </div>
    </>
}
export default Componente1;