import { useEffect } from 'react';
import './App.css';
//import Componente4 from './componentes/'
import Componente1 from './componentes/Componente1';
import Componente2 from './componentes/Componente2';
import Componente3 from './componentes/Componente3';
import json from './componentes/clima.json'
import { useState } from 'react';


function App() {

  {/* 
  const [data,setData]=useState(null);
  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-34.9215&longitude=-57.9545&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,visibility,windspeed_10m,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1';

  useEffect(()=>{
    fetch(apiUrl)
    .then((response)=>{
      if(!response.ok){
        //throw
      }
      return response.json();
    })
    .then((info)=>(){
      setData(info);
    })
  },[])
*/}
  return (
    <div className="App">
      <Componente1 latitude={json.latitude} temperatura={json.hourly.temperature_2m}/>
      {/*<Componente1 latitude={json.latitude} temperatura={json.hourly.temperature_2m}/>*/}
      {/*<Componente1 latitude={json.latitude} hourly={json.hourly.temperature_2m[3]}/>*/}
      {/*<Componente1 latitude={5} hourly={{'temperature_2m':[1,2,3,4]}}/>*/}
      <div className="Contenedor">
      <Componente2/>
      <Componente3/>
      </div>
    </div>
    
  );
}

export default App;
