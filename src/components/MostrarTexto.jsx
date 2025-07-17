function MostrarTexto({ verTexto, setVerTexto }) {
    
    const cambio  = () => {
        setVerTexto(!verTexto);
    }

    return (
        <div>
            {verTexto && <p>Este texto es visible</p>}
            <button className="btn warning" onClick={() => cambio()}>{verTexto ? "Ocultar Texto" : "Ver Texto"} </button>
        </div>
    );
}

export default MostrarTexto;