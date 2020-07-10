import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";
import Carga from "./Carga";

// import { getGifs } from "../helpers/getGifs";


const GifGrid = ({category, col}) => {

    const {data:images, loading} = useFetchGifs(category);

    //const color = 'white'; 

    

    // const [imagenes, setImagenes] = useState([]);

    // useEffect( () => {
    //     getGifs( category).then(imgs => setImagenes(imgs))
    // }, [ category]);


  return (
      <Fragment>
      <div>
      
      <h3>{category}</h3>
      {loading && <Carga></Carga>}
      <div className='card-grid'>
            
                { images.map( img => { 
                    return <GifItem color={col} img={img} key={img.id}></GifItem>
                }) }
            
        </div>
      </div>
        
      </Fragment>
  );
};

GifGrid.propTypes = {
    category: PropTypes.string
};

GifGrid.defaultProps = {
    category: 'nada'
};

export default GifGrid;