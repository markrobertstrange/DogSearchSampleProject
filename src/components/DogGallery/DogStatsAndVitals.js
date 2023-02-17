import React from 'react';
import './css/lovingpaws.css';

const DogStatsAndVitals = (props) => {
    return (
        <div id="DogVitalsAndStats">
            <div style={{ width: "500px",  marginRight: "auto" }}>
                <div className="doggallery-pane-content"><b>Breed:</b> {props.pane.breed}&nbsp;&nbsp;&nbsp;&nbsp;<b>Group:</b> {props.pane.breedGroup}</div>
                <strong className="doggallery-pane-description">{props.pane.description}</strong>
                <div
                    style={{ width: "500px", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontSize: "16px", fontWeight: "600", marginTop: "10px",marginBottom: "10px" }}
                >
                    Vital Stats:
                </div>
            </div>
            <div style={{ display: "flex", width: "500px", marginLeft: "auto", marginRight: "auto" }}>
                <div className="doggallery-pane-stats"><b>Height:</b> {props.pane.height}</div>
                <div className="doggallery-pane-stats"><b>Weight:</b> {props.pane.weight}</div>
                <div className="doggallery-pane-stats"><b>Life-span:</b> {props.pane.lifeSpan}</div>
            </div>
            <div style={{ width: "500px", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontSize: "16px", fontWeight: "600", marginTop: "10px",marginBottom: "10px"  }}>
                Ratings Scale: 1 to 5 (Higher is better)
            </div>
            <div style={{ display: "flex", width: "500px", marginLeft: "auto", marginRight: "auto" }}>
                <div className="doggallery-pane-ratings"><b>Kid Friendly:</b> {props.pane.kidFriendly}</div>
                <div className="doggallery-pane-ratings"><b>Dog Friendly:</b> {props.pane.dogFriendly}</div>
                <div className="doggallery-pane-ratings"><b>Shedding:</b> {props.pane.lowShedding}</div>
            </div>
            <div style={{ display: "flex", width: "500px", marginLeft: "auto", marginRight: "auto" }}>
                <div className="doggallery-pane-ratings"><b>Grooming:</b> {props.pane.easyToGroom}</div>
                <div className="doggallery-pane-ratings"><b>Energy:</b> {props.pane.highEnergy}</div>
                <div className="doggallery-pane-ratings"><b>Health:</b> {props.pane.goodHealth}</div>
            </div>
            <div style={{ display: "flex", width: "500px", marginLeft: "auto", marginRight: "auto" }}>
                <div className="doggallery-pane-ratings"><b>Barking:</b> {props.pane.lowBarking}</div>
                <div className="doggallery-pane-ratings"><b>Intelligence:</b> {props.pane.intelligence}</div>
                <div className="doggallery-pane-ratings"><b>Trainability:</b> {props.pane.easyToTrain}</div>
            </div>
            <div style={{ display: "flex", width: "500px", marginLeft: "auto", marginRight: "auto" }}>
                <div className="doggallery-pane-ratings"><b>Tolerates Heat:</b> {props.pane.toleratesHot}</div>
                <div className="doggallery-pane-ratings"><b>Tolerates Cold:</b> {props.pane.toleratesCold}</div>
                <div className="doggallery-pane-ratings"/>
            </div>
        </div>
    );
}

export default DogStatsAndVitals;