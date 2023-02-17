import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Select from 'react-select'

// Redux 
import {connect} from "react-redux"
import {saveFilterSelections, resetSearchCriteria, getSearchResults} from "./../redux/actions/dogs.actions"

const noSelection = { label: "No Preference", value: 0, description: "" }

class DogSearch extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectGroupOptions: null,
            selectSizeOptions: null,
            selectHighLowOptions: null,
            selectFriendlyRangeOptions: null,
            selectSheddingRangeOptions: null,
            selectEasyRangeOptions: null,
            selectBarkingRangeOptions: null,
        };
    }    

    static getDerivedStateFromProps = (nextProps) => {
        if (nextProps.doggroups !== undefined && nextProps.dogsizes !== undefined && nextProps.filterselections !== undefined) {
            return {
                // Get pre-fetched data and apply it to state to populate dropdowns.
                selectGroupOptions: nextProps.doggroups,
                selectSizeOptions: nextProps.dogsizes,
                selectHighLowOptions: nextProps.highlowrange,
                selectFriendlyRangeOptions: nextProps.friendlyrange,
                selectSheddingRangeOptions: nextProps.sheddingrange,
                selectEasyRangeOptions: nextProps.easyrange,
                selectBarkingRangeOptions: nextProps.barkingrange,

                // By saving filterselections in redux just as they are formatted for use in the controls, I can just apply them back to state
                // and use their state data again to re-apply previously selected options.
                filterSelections: nextProps.filterselections, 
            }
        } else {
            return null;
        }
    }

    // All the dropdowns use the same format for their data, so a common handler can take care of them all
    // so long as each control passes thier own unique params to it.
    handleSelectChange = (e, rname) => {
        let fs = this.state.filterSelections;
        // This gets property by string name :)
        fs[rname] = e;
        this.setState({
            filterSelections: fs
        });
        
        this.props.saveFilterSelections(fs);
    }

    handleSearchStringChange = (e) => {
        let fs = this.state.filterSelections;
        fs.searchText = e.target.value;
        
        this.setState({
            filterSelections: fs
        });

        this.props.saveFilterSelections(fs);
    }

    render() {
        return (
            <div>
                <h2 style={{marginLeft: "30px"}}>Dog Search</h2>
                <div style={{marginLeft: "30px", marginBottom: "5px", width: "800px"}}>When entering in search criteria, selections like breed name, dog groups and size combinations will narrow the results exclusively to dogs that fall into those ranges.
                    &nbsp;&nbsp;However - traits such as <i>Temperment</i>, <i>Intelligence</i>, <i>Shedding Level</i>, etc have their selections designed to fall within an expansive range. This means that a search for an intelligence level of Average will 
                    include dogs whose intelligence measures as Average or better.
                </div>
                <button id="btnResetCriteria"
                    onClick={this.props.resetSearchCriteria}
                >
                    Reset Search Criteria
                </button>
                <div style={{marginLeft: "30px", width: '400px', marginBottom: "25px", marginTop: "15px"}}>
                    <span>Find dog breeds by a partial value (i.e. "Irish")</span>
                    <input 
                        className="search-input" 
                        type="text" 
                        value={this.state.filterSelections !== undefined ? this.state.filterSelections.searchText : ''} 
                        onChange={this.handleSearchStringChange} 
                    />
                </div>
                <div style={{width: '1100px', display: 'flex'}}>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "25px"}}>
                        <span>Select a size of dog</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedSize : noSelection}
                            options={this.state.selectSizeOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedSize")}
                        />
                    </div>
                    <div style={{marginLeft: "10px", width: '800px', marginBottom: "30px", marginTop: "27px"}}>
                        <label>{ this.state.filterSelections.selectedSize.description}</label>
                    </div>
                </div>
                <div style={{width: '900px', display: 'flex'}}>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "65px"}}>
                        <span>Choose a specific dog group</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedGroup : noSelection}
                            options={this.state.selectGroupOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedGroup")}
                        />
                    </div>
                    <div style={{marginLeft: "10px", width: '600px', marginTop: "15px"}}>
                        <label>{ this.state.filterSelections.selectedGroup.description}</label>
                    </div>
                </div>

                <div style={{width: '1100px', display: 'flex'}}>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "20px"}}>
                        <span>Temperment with Children</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedKidFriendly : noSelection}
                            options={this.state.selectFriendlyRangeOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedKidFriendly")}
                        />
                    </div>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "20px"}}>
                        <span>Temperment with other dogs</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedDogFriendly : noSelection}
                            options={this.state.selectFriendlyRangeOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedDogFriendly")}
                        />
                    </div>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "20px"}}>
                        <span>Shedding Level</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedShedding : noSelection}
                            options={this.state.selectSheddingRangeOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedShedding")}
                        />
                    </div>
                </div>

                <div style={{width: '1100px', display: 'flex'}}>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "20px"}}>
                        <span>Ease of grooming</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedGrooming : noSelection}
                            options={this.state.selectEasyRangeOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedGrooming")}
                        />
                    </div>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "20px"}}>
                        <span>Energy Level</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedEnergy : noSelection}
                            options={this.state.selectHighLowOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedEnergy")}
                        />
                    </div>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "20px"}}>
                        <span>General Health</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedHealth : noSelection}
                            options={this.state.selectHighLowOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedHealth")}
                        />
                    </div>
                </div>

                <div style={{width: '1100px', display: 'flex'}}>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "20px"}}>
                        <span>Barking Level</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedBarking : noSelection}
                            options={this.state.selectBarkingRangeOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedBarking")}
                        />
                    </div>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "20px"}}>
                        <span>Intelligence</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedIntelligence : noSelection}
                            options={this.state.selectHighLowOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedIntelligence")}
                        />
                    </div>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "20px"}}>
                        <span>Ease of Training</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedTraining : noSelection}
                            options={this.state.selectEasyRangeOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedTraining")}
                        />
                    </div>
                </div>  
                <div style={{width: '1100px', display: 'flex'}}>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "20px"}}>
                        <span>Tolerance to Heat</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedToleranceHeat : noSelection}
                            options={this.state.selectHighLowOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedToleranceHeat")}
                        />
                    </div>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "20px"}}>
                        <span>Tolerance to Cold</span>
                        <Select
                            value={this.state.filterSelections !== undefined ? this.state.filterSelections.selectedToleranceCold : noSelection}
                            options={this.state.selectHighLowOptions} 
                            onChange={(e) => this.handleSelectChange(e, "selectedToleranceCold")}
                        />
                    </div>
                    <div style={{marginLeft: "30px", width: '300px', marginBottom: "20px", marginTop: "21px"}}>
                        <button id="btnDogSearch"
                            onClick={() => this.props.getSearchResults(this.state.filterSelections.apiSearchParams).then(() => {
                                this.props.history.push("/results");
                                //https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
                            })}
                        
                        >
                            Search for Dogs!!!
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        doggroups: state.dogstorage.doggroups,
        dogsizes: state.dogstorage.dogsizes,
        highlowrange: state.dogstorage.highlowrange,
        friendlyrange: state.dogstorage.friendlyrange,
        sheddingrange: state.dogstorage.sheddingrange,
        easyrange: state.dogstorage.easyrange,
        barkingrange: state.dogstorage.barkingrange,
        filterselections: state.dogstorage.filterselections
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveFilterSelections: (fs) => dispatch(saveFilterSelections(fs)),
        getSearchResults: (sc) => dispatch(getSearchResults(sc)),
        resetSearchCriteria: () => dispatch(resetSearchCriteria())
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DogSearch));
 
