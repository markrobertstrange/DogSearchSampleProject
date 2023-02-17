import React from 'react';
import './css/lovingpaws.css';

const CarouselRightArrow = (props) => {
    return (
        <div 
            className="rightarrow" 
            onClick={props.onClick}
        >
        </div>
    );
}

export default CarouselRightArrow;