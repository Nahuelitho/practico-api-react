import './App.css';
import Componente1 from './componentes/Componente1';
import Componente2 from './componentes/Componente2';
import Componente3 from './componentes/Componente3';
import json from './componentes/clima.json'



function App() {
  return (
    <div className="App">
      <Componente1 latitude={json.latitude} temperatura={json.hourly.temperature_2m}/>
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
