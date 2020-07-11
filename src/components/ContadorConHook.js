import React, {useState} from 'react'

export default function ContadorConHook ()  {
    const [cont, setCont] = useState(0);

    const quitar = () => {
        if (cont > 0) { 
            setCont(cont - 1);
        }
    }

    
    return (
        <div>
            <p>Counter con hook: {cont}</p>
            <button onClick={() => {setCont(cont + 1);}}>Agregar 1</button>
            <button onClick={quitar}>Quitar 1</button>

            
        </div>
    ); 
}

