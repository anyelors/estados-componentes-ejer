import './App.css';
import { useState } from "react";
import { useToggle } from "@uidotdev/usehooks";
import ContadorMultiple from './components/ContadorMultiple';
import BotonIncrementa from './components/BotonIncrementa';
import MostrarTexto from './components/MostrarTexto';
import CambiaColor from './components/CambiaColor';
import EquipoGanador from './components/EquipoGanador';
import EquipoA from './components/EquipoA';
import EquipoB from './components/EquipoB';
import LogicalNot from './components/LogicalNot';
import PuntosEquipo from './components/PuntosEquipo';
import useToggle1 from './hook/useToggle1';

function App() {
  const [contador, setContador] = useState(0);
  const [verTexto, setVerTexto] = useState(null);
  const [color, setColor] = useState('#ff0000');
  const [puntosA, setPuntosA] = useState(0);
  const [puntosB, setPuntosB] = useState(0);
  const [on, toggle] = useToggle(true);

  const [abierto, alternar] = useToggle1();

  function ToggleDemo({ on, toggle }) {
    return (
      <div>
        <label>
          <input
            onChange={toggle}
            type="checkbox"
            checked={on}
          />
          <div></div>
          <span>{on ? "On" : "Off"}</span>
        </label>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>1.ariketa – Contador doble sincronizado</h2>
        <ContadorMultiple valor={contador} />
        <BotonIncrementa setContador={setContador} />
        <br /><br />
        <h2>2.ariketa – Mostrar/Ocultar información</h2>
        <MostrarTexto verTexto={verTexto} setVerTexto={setVerTexto} />
        <br /><br />
        <h2>3.ariketa – Color de fondo dinámico con lifting state up</h2>
        <CambiaColor color={color} setColor={setColor} />
        <br /><br />
        <h2>4.ariketa – Estado compartido: puntuaciones de dos equipos</h2>
        <EquipoGanador puntosA={puntosA} puntosB={puntosB} />
        <PuntosEquipo nombre={"Equipo A"} setPuntos={setPuntosA} />
        <PuntosEquipo nombre={"Equipo B"} setPuntos={setPuntosB} />
        <EquipoA setPuntosA={setPuntosA} />
        <EquipoB setPuntosB={setPuntosB} />
        <br /><br />
        <h2>5.ariketa – Hook personalizado</h2>
        <h1>UseToggle</h1>
        <button disabled={on} onClick={() => toggle(true)}>
          Turn On
        </button>
        <button disabled={!on} onClick={() => toggle(false)}>
          Turn Off
        </button>
        <ToggleDemo toggle={toggle} on={on} />
        <br />
        <LogicalNot />
        <br /><br />
        <button
          onClick={alternar}
          className="btn success">
          Toggle Estado {abierto ? 'ON' : 'OFF'}
        </button>
        {abierto && (
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
          </ul>
        )}
        <br /><br />
      </header>
    </div>
  );
}

export default App;
