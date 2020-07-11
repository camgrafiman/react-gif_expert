import React, { Fragment, useState } from 'react'; 
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';
import SelColores from './SelColores';
import Contador from './Contador';
import ContadorConHook from './ContadorConHook';
import Coordenadas from './Coordenadas';
import Coords from '../hooks/useCoordenadasConHooks';

const GifExpertApp = () => {

    // aqui uso el hook useState para comenzar con una array que tiene un valor por defecto:
    const [categorias, setCategorias] = useState(['Dragon Ball Z', 'Final fantasy 7']);
    const [color, setcolor] = useState(null);
    

        return ( 
            <Fragment>
                <h2>GifExpertApp</h2>
                <AddCategory setCategorias={setCategorias}></AddCategory>
                <hr/>
                <SelColores color={color => setcolor(color)}></SelColores>
                <hr></hr>
                <p>Color actual: { color} </p>

                <Contador color={color} ></Contador>
                <ContadorConHook></ContadorConHook> 
                <hr/>
                <Coordenadas></Coordenadas>

                <hr></hr>
                <p>Información del HOOK Coords (useCoordenadasConHooks):</p>
                <Coords></Coords>
                
                <ol>
                    {
                        categorias.map( category => {
                            return <GifGrid key={category} category={category} col={color}></GifGrid>
                            })
                    }
                </ol>
                
            </Fragment>
        )
    
}
export default GifExpertApp;
