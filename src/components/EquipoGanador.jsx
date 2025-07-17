function EquipoGanador({ puntosA, puntosB }) {
  return (
    <>
      {puntosA === puntosB ? (
        <h2>Empate</h2>
      ) : puntosA > puntosB ? (
        <h2>Equipo A Ganador</h2>
      ) : (
        <h2>Equipo B Ganador</h2>
      )}
      <p className="equipo-a">Equipo A: {puntosA}</p>
      <p className="equipo-b">Equipo B: {puntosB}</p>
    </>
  );

}

export default EquipoGanador;