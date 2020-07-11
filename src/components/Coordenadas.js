import React, { Component } from 'react';
import Carga from './Carga';

export default class Coordenadas extends Component {
    state = {
        coordenadas : {
            latitud: null,
            longitud: null
        }
    }

    render() {
        return this.state.coordenadas.latitud === null ? (
            <Carga></Carga>
        ) : (
            <div>
                <h3>Latitud: {this.state.coordenadas.latitud}</h3>
                <h3>Longitud: {this.state.coordenadas.longitud}</h3>
            </div>
        )
    }
    //Cuando el componente está montado traer la información de geolocalización:
    componentDidMount() {
        this.geoId = window.navigator.geolocation.watchPosition(posicion => {
            this.setState({
                coordenadas: {
                    latitud: posicion.coords.latitude,
                    longitud: posicion.coords.longitude
                }
            })
        })
    };

    //Cuando se desmonta el componente dejamos de escuchar la info de geolocalización:
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.geoId);
    }


}
