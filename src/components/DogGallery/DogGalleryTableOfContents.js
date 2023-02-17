import React from 'react';
import './css/lovingpaws.css';

const CarouselIndicator = (props) => {
    return (
      <li>
        <div 
          className={props.index === props.activeIndex ? "doggallery-indicator doggallery-indicator--active" : "doggallery-indicator"}
          onClick={props.onClick}
        >
        <img className="doggallery-indicator-image"
            src={props.pane.image} 
            alt="Missing?"
        />
        </div>
      </li>
    );
  }

export default CarouselIndicator;