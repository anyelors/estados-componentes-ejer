import { useState } from "react";

function useToggle1(ini = false) {
    const [valor, setValor] = useState(ini);
    const toggle = ()=> setValor((x)=>!x)
    return [valor, toggle];
}

export default useToggle1;