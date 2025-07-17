function PuntosEquipo({ nombre, setPuntos }) {
  return <button className="btn primary" onClick={() => setPuntos(prev => prev + 1)}>{nombre}</button>;  
}

export default PuntosEquipo;