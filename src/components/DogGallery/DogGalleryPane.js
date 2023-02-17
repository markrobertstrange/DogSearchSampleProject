import React from "react";
import './css/lovingpaws.css';

const DogGalleryPane = (props) => {
    return (
        <li className={props.index === props.activeIndex ? "doggallery-pane doggallery-pane--active" : "doggallery-pane"}>
            <div className="wrapper">
                <img
                    className="noSelect" 
                    id="pane"
                    style={props.activeIndex > props.prevIndex ? {right: "-800px"} : {right: "800px"} }
                    src={props.pane.image}
                    alt="Help! Lost Dog..."
                />
                <img 
                    className="noSelect" 
                    id="prevpane"
                    style={props.activeIndex > props.prevIndex ? {right: "800px"} : {right: "-800px"} }
                    src={props.prevpane !== undefined ? props.prevpane.image : null}
                    alt="Help! Lost Dog..."
                />
            </div>
        </li>
    );
}

export default DogGalleryPane;