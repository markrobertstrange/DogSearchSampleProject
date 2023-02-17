import * as alasql from 'alasql';
const noSelection =  { label: "No Preference", value: 0, description: "" }
const API_PATH = "localhost:3000";

const filterselections = {
    searchText: '',
    searchResults: null,
    loaded: false,
    apiSearchParams: '',
    selectedGroup: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ],
    selectedSize: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ],
    selectedEnergy: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ],
    selectedHealth: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ],
    selectedIntelligence: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ],
    selectedToleranceHeat: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ],
    selectedToleranceCold: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ],
    selectedKidFriendly: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ],
    selectedDogFriendly: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ],
    selectedShedding: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ],
    selectedGrooming: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ],
    selectedTraining: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ],
    selectedBarking: [
      {
        label: 'No Preference',
        value: 0,
        description: ''
      }
    ]
};

// Scrape all of the properties of the the filterSelection, and those with a non-default
// value get added to the API parameter string. 
let createAPIFilterParams = (filterSelections) => {
    let filters = Object.keys(filterSelections)
    let paramString = " ";
    let strAppendToken = "";

    filters.forEach((p)=>{
        if (paramString.length > 1) {
            //strAppendToken = "&";
            strAppendToken = " and ";
        }
        if (p === "searchText" && filterSelections[p].length > 0) {
            paramString += strAppendToken + "breed LIKE '%" + filterSelections[p] + "%'";
        } else if (p === "selectedGroup" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "breedGroup = '" + filterSelections[p].label + "'";
        } else if (p === "selectedSize" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "size = " + filterSelections[p].value;
        } else if (p === "selectedEnergy" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "highEnergy >= " + filterSelections[p].value;
        } else if (p === "selectedHealth" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "goodHealth >= " + filterSelections[p].value;
        } else if (p === "selectedIntelligence" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "intelligence >= " + filterSelections[p].value;
        } else if (p === "selectedToleranceHeat" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "toleratesHot >= " + filterSelections[p].value;
        } else if (p === "selectedToleranceCold" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "toleratesCold >= " + filterSelections[p].value;
        } else if (p === "selectedKidFriendly" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "kidFriendly >= " + filterSelections[p].value;
        } else if (p === "selectedDogFriendly" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "dogFriendly >= " + filterSelections[p].value;
        } else if (p === "selectedShedding" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "lowShedding >= " + filterSelections[p].value;
        } else if (p === "selectedGrooming" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "easyToGroom >= " + filterSelections[p].value;
        } else if (p === "selectedTraining" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "easyToTrain >= " + filterSelections[p].value;
        } else if (p === "selectedBarking" && filterSelections[p].value !== 0 && filterSelections[p].value !== undefined) {
            paramString += strAppendToken + "lowBarking >= " + filterSelections[p].value;
        }
    });

    if (paramString.length > 1) {
        filterSelections.apiSearchParams = paramString;
    } else {
        filterSelections.apiSearchParams = "";
    }
        
    console.log(paramString);
    return filterSelections;
}


export function saveDogGroups(results) {
    return {
        type: "save_Dog_Groups",
        doggroups: results
    }
}

export function saveDogSizes(results) {
    return {
        type: "save_Dog_Sizes",
        dogsizes: results
    }
}

export function saveHighLow(results) {
    return {
        type: "save_High_Low",
        highlowrange: results
    }
}

export function saveFriendlyRange(results) {
    return {
        type: "save_Friendly_Range",
        friendlyrange: results
    }
}

export function saveSheddingRange(results) {
    return {
        type: "save_Shedding_Range",
        sheddingrange: results
    }
}

export function saveEasyRange(results) {
    return {
        type: "save_Easy_Range",
        easyrange: results
    }
}

export function saveBarkingRange(results) {
    return {
        type: "save_Barking_Range",
        barkingrange: results
    }
}

export function saveFilterSelections(results) {
    let fs = createAPIFilterParams(results) 
    return {
        type: "save_Filter_Selections",
        filterselections: fs
    }
}

export function resetSearchCriteria() {
    let noSelection =  { label: "No Preference", value: 0, description: "" }

    let fs = {
        searchText: "",
        selectedGroup: noSelection,
        selectedSize: noSelection,
        selectedEnergy: noSelection,
        selectedHealth: noSelection,
        selectedIntelligence: noSelection,
        selectedToleranceHeat: noSelection,
        selectedToleranceCold: noSelection,
        selectedKidFriendly: noSelection,
        selectedDogFriendly: noSelection,
        selectedShedding: noSelection,
        selectedGrooming: noSelection,
        selectedTraining: noSelection,
        selectedBarking: noSelection,
        apiSearchParams: ""
    }

    return {
        type: "save_Filter_Selections",
        filterselections: fs
    }
}


export function getDogGroups() {
    return dispatch =>
    //fetch("http://" + API_PATH + "/doggroups")
    fetch('./doggroups.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
       })
    .then(res => res.json())
    .then((result) => {
        let newCollection = Object.values(result);
        newCollection.unshift(noSelection);

        return dispatch({
            type: "save_Dog_Groups",
            doggroups: newCollection
        });
    });
}

export function getDogSizes() {
    return dispatch => 
    //fetch("http://" + API_PATH + "/dogsizes")
    fetch('./dogsizes.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then((result) => {
        let newCollection = Object.values(result);
        newCollection.unshift(noSelection);

        return dispatch({
            type: "save_Dog_Sizes",
            dogsizes: newCollection
        });
    });

}

export function getHighLowRanges() {
    return dispatch => 
    //fetch("http://" + API_PATH + "/highlowranges")
    fetch('./highlowrange.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })    
    .then(res => res.json())
    .then((result) => {
        let newCollection = Object.values(result);
        newCollection.unshift(noSelection);
        
        return dispatch({
            type: "save_High_Low",
            highlowrange: newCollection
        });
    });

}

export function getFriendlyRanges() {
    return dispatch => 
    //fetch("http://" + API_PATH + "/friendlyranges")
    fetch('./friendlyrange.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then((result) => {
        let newCollection = Object.values(result);
        newCollection.unshift(noSelection);
       
        return dispatch({
            type: "save_Friendly_Range",
            friendlyrange: newCollection
        });
    });

}

export function getSheddingRanges() {
    return dispatch => 
    fetch('./sheddingrange.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })    
    .then(res => res.json())
    .then((result) => {
        let newCollection = Object.values(result);
        newCollection.unshift(noSelection);
       
        return dispatch({
            type: "save_Shedding_Range",
            sheddingrange: newCollection
        });
    });

}

export function getEasyRanges() {
    return dispatch => 
    //fetch("http://" + API_PATH + "/easyranges")
    fetch('./easyrange.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })       
    .then(res => res.json())
    .then((result) => {
        let newCollection = Object.values(result);
        newCollection.unshift(noSelection);
        
        return dispatch({
            type: "save_Easy_Range",
            easyrange: newCollection
        });
    });

}

export function getBarkingRanges() {
    return dispatch => 
    //fetch("http://" + API_PATH + "/barkingranges")
    fetch('./barkingrange.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })       
    .then(res => res.json())
    .then((result) => {
        let newCollection = Object.values(result);
        newCollection.unshift(noSelection);
        
        return dispatch({
            type: "save_Barking_Range",
            barkingrange: newCollection
        });
    });

}

//https://github.com/reduxjs/redux/issues/723

export function GetSelectOptions() {
    //console.log("GetSelectOptions");

    return dispatch => Promise.all([
        dispatch(getDogGroups()),
        dispatch(getDogSizes()),
        dispatch(getHighLowRanges()),
        dispatch(getFriendlyRanges()),
        dispatch(getSheddingRanges()),
        dispatch(getEasyRanges()),
        dispatch(getBarkingRanges())
    ]);
}

export function getSearchResults(apiSearchParams) {
    let recordCount = 0;
    return dispatch => 
    fetch('./dogdata.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })     
    .then(res => res.json())
    .then((result) => {
        var rd = alasql("SELECT * FROM ? " + (apiSearchParams.length > 5 ? "WHERE " + apiSearchParams : ""), [result]);
        recordCount = rd.length;
        dispatch({
            type: "save_Search_Results",
            searchResults: rd
        });
    }).then(()=>{
        return recordCount;
    });
}

