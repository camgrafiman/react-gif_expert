import React from 'react';
import loader from '../images/loading.gif';
 
const Carga = () => {
    return (
        <div>
            <img className='loading' src={loader} alt='Cargando...'></img>
        </div>
    );
}
 
export default Carga;