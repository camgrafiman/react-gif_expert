import React, {Fragment, useState, useEffect} from "react";

const SelColores = ({color}) => {
    const coloresDisponibles = ['green', 'red', 'blue', 'white', 'black', 'orange', 'grey'];

    const [colorActual, setColorActual] = useState('');
    useEffect(() => {
        color(colorActual);
    }, [colorActual]);

    function handleColorClick (e)  {
        console.info(e.target.dataset.color);
        // e.preventDefault();
        //setColorActual(e.target.textContent);
        setColorActual(e.currentTarget.dataset.color);
        /*Enviar el color actual al padre */
        //color(colorActual);
    }




  return (
      <Fragment>

      <ol className='flex'>
          {
              coloresDisponibles.map(color =>{
                  let estiloColor = { background: color};
                  return <div className='caja-color' key={color} onClick={handleColorClick} data-color={color} style={estiloColor}>{color}</div>
              })
          }
      </ol>

      </Fragment>
  )
};


export default SelColores;