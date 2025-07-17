function BotonIncrementa({ setContador }) {
  return (
    <>
      <button className="btn primary" onClick={() => setContador(prev => prev + 1)}>SumarUno</button>
      <button className="btn secondary" onClick={() => setContador(prev => prev + 2)}>SumarDos</button>
    </>
  );  
}

export default BotonIncrementa;