function EquipoA({ setPuntosA }) {
  return <button className="btn primary" onClick={() => setPuntosA(prev => prev + 1)}>Puntos Equipo A</button>;  
}

export default EquipoA;