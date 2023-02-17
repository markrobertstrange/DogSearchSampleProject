import React, { useState } from 'react'

import DogGalleryPane from "./DogGalleryPane";
import DogGalleryIndicator from "./DogGalleryTableOfContents";
import DogStatsAndVitals from "./DogStatsAndVitals";
import DogGalleryLeftArrow from "./DogGalleryLeftArrow";
import DogGalleryRightArrow from "./DogGalleryRightArrow";

import "./css/lovingpaws.css";

export default function DogGallery (props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [prevpane, setPrevPane] = useState(undefined); 


    const autoScroll = (index) => {
        //https://www.javascripttutorial.net/javascript-dom/javascript-scrollintoview/
        //https://docs.w3cub.com/dom/element/scrollintoview
        let el = document.querySelector(".doggallery-indicator-list li:nth-of-type(" + (index+1) + ")");
        el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    const goToPane = (index) => {
        let { panes } = props;
        let prevIndex = activeIndex;

        setPrevPane(panes[prevIndex]);
        setPrevIndex(prevIndex);
        setActiveIndex(index);

        autoScroll(index);
    };

    const goToPrevPane = (e) => {
        e.preventDefault();

        let { panes } = props;
        let index = activeIndex;
        let prevIndex = index;
        let panesLength = panes.length;
        
        if (index < 1) {
            index = panesLength;
        }

        --index;

        setPrevPane(panes[prevIndex]);
        setPrevIndex(prevIndex);
        setActiveIndex(index);

        autoScroll(index);
    };

    const goToNextPane = (e) => {
        e.preventDefault();

        let { panes } = props;
        let index = activeIndex;
        let prevIndex = index;
        let panesLength = panes.length - 1;

        if (index === panesLength) {
            index = -1;
        }

        ++index;

        setPrevPane(panes[prevIndex]);
        setPrevIndex(prevIndex);
        setActiveIndex(index);

        autoScroll(index);
    };

    return (
        <div style={{ display: "flex", width: "1400px", marginLeft: "auto", marginRight: "auto" }}>
            <div id="DogGalleryControls">
                <div className="doggallery">
                    <ul className="doggallery-panes">
                        {props.panes.map((pane, index) => (
                            <DogGalleryPane
                                key={index}
                                index={index}
                                activeIndex={activeIndex}
                                prevIndex={prevIndex}
                                pane={pane}
                                prevpane={prevpane}
                                goToPrevPane={(e) => goToPrevPane(e)}
                                goToNextPane={(e) => goToNextPane(e)}
                            />
                        ))}
                    </ul>
                    <div className="doggallery-indicator-container">
                        <ul className="doggallery-indicator-list">
                            <div className="doggallery-indicator-flexbox">
                                {props.panes.map((pane, index) => (
                                    <DogGalleryIndicator
                                        key={index}
                                        index={index}
                                        activeIndex={activeIndex}
                                        prevIndex={prevIndex}
                                        isActive={activeIndex === index}
                                        pane={pane}
                                        onClick={() => goToPane(index)}
                                    />
                                ))}
                            </div>
                        </ul>
                    </div>
                    <DogGalleryLeftArrow 
                        onMouseUp={(e) => goToPrevPane(e)} 
                        onTouchEnd={(e) => goToPrevPane(e)} 
                    />
                    <DogGalleryRightArrow onClick={(e) => goToNextPane(e)} />
                </div>
            </div>                
            <DogStatsAndVitals
                pane={props.panes[activeIndex]}
            />
        </div>
    );
}
