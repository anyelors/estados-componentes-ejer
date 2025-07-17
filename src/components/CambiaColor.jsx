function CambiaColor({ color, setColor }) {
    return (
        <>
            <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
            <br />
            <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{ fontSize: "1rem", padding: "0.5rem" }}
            >
                <option value="red">Rojo</option>
                <option value="blue">Azul</option>
                <option value="green">Verde</option>
            </select>
        </>
    );
}

export default CambiaColor;