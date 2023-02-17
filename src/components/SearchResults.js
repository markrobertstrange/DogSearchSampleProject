import React from 'react';
import {connect} from "react-redux"
import DogGallery from "./DogGallery/DogGallery.js";
import lostDog from "./../images/lostdog.png"

const SearchResults = (props) => {
    return (
        <div>
            <h2 style={{width: "100%", textAlign: "center"}}>The following dogs match your search criteria. Click the Search Tab to refine your search further.</h2>
    
            <div>
                    {(props.searchResults !== undefined && props.searchResults.length > 0) ? (
                        <DogGallery 
                            panes={props.searchResults}
                        />
                    ) : (
                        <div>
                            <div className="wrapper">
                                <img id="pane"
                                    src={lostDog}
                                    alt="Help! Lost Dog..."
                                />
                            </div>
                            <div style={{fontSize: "30px", width: "100%", textAlign: "center"}}><b>WOOF!? Doggone it, no dogs matched your search.</b></div>
                        </div>                    
                    )
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        searchResults: state.dogstorage.searchResults
    }
}

export default connect(mapStateToProps)(SearchResults);
