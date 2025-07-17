function EquipoB({ setPuntosB }) {
  return <button className="btn secondary" onClick={() => setPuntosB(prev => prev + 1)}>Puntos Equipo B</button>;  
}

export default EquipoB;