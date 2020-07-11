import React, { useState, useEffect } from 'react';
import Carga from '../components/Carga';

function useCoordenadasConHooks() {
    /* useState HOOK: */
    const [coord, setCoord] = useState({
        lat: null,
        long: null
    });
    let geoInfo;

    useEffect(() => {
        geoInfo = window.navigator.geolocation.watchPosition(pos => {
            setCoord({
                lat: pos.coords.latitude,
                long: pos.coords.longitude
            });
        });

        /*Hace lo mismo que componentWillUnmount */
        return () => {
            window.navigator.geolocation.clearWatch(geoInfo);
        }
    });

    return coord;

}

/*Función que usa  */

const Coords = () => {
    const coordinates = useCoordenadasConHooks();

    return ( coordinates.lat == null ? (
        <Carga></Carga>
    ) : (
        <div>
            <p>Lat: {coordinates.lat}</p>
            <p>Long: {coordinates.long}</p>
        
        </div>
    )
  );

}

export default Coords;