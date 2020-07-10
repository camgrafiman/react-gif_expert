import React  from 'react';

const GifItem = ({color, img}) => {

    const colorStyle = {
        color: color,
        background: 'grey'
    }

    return (
        <div className='card animate__animated animate__flipInY '>
            <a href={img.url}><img className='animate__animated animate__fadeIn animate__delay-1s' src={img.url} alt={img.title} key={img.id}></img></a>
            <p style={colorStyle}>{img.title}</p>
        </div>
        
    )
}

export default GifItem;