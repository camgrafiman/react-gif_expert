import React, { Component } from 'react';
 
class Contador extends Component {
    state = {
        cuenta : 0
    }
    aumentar = () => {
        this.setState({ cuenta: this.state.cuenta +1}); 
    }
    disminuir = () => {
        if(this.state.cuenta > 0 ) {
            this.setState({cuenta: this.state.cuenta -1});
        }
    }
    render() { 
        return (
            <div>
                <h5>Cuenta: {this.state.cuenta}</h5>
                <button onClick={this.aumentar}>Aumentar cuenta</button>
                <button onClick={this.disminuir}>Disminuir cuenta</button>
            </div>
        );
    }
}
 
export default Contador;