import React from 'react';
import './css/lovingpaws.css';

const CarouselLeftArrow = (props) => {
    return (
        <div 
            className="leftarrow" 
            onMouseUp={props.onMouseUp}
        >
        </div>
    );
}

export default CarouselLeftArrow;