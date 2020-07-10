import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';

function AddCategory({ setCategorias }) {

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        if (input.trim().length > 2) {
            setCategorias(cat => [input, ...cat]);
            setInput('');

        }
    }


    return ( 
        <Fragment>
            <h3 > Agregar categoría: </h3> 
            <form onSubmit = { handleSubmit } >
                <input type = "text"
                value = { input }
                onChange = { handleChange }
                /> 
                <button> Enviar </button>

            </form> 
        </Fragment>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory