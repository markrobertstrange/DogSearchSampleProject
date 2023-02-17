const NO_SELECTION = [{label: "No Preference", value: 0, description: ""}];

const INITIAL_STATE = {
    doggroups: {},
    dogsizes: {},
    highlowrange: {},
    friendlyrange: {},
    sheddingrange: {},
    easyrange: {},
    barkingrange: {},
    filterselections: {
        searchText: "",
        selectedGroup: NO_SELECTION,
        selectedSize: NO_SELECTION,
        selectedEnergy: NO_SELECTION,
        selectedHealth: NO_SELECTION,
        selectedIntelligence: NO_SELECTION,
        selectedToleranceHeat: NO_SELECTION,
        selectedToleranceCold: NO_SELECTION,
        selectedKidFriendly: NO_SELECTION,
        selectedDogFriendly: NO_SELECTION,
        selectedShedding: NO_SELECTION,
        selectedGrooming: NO_SELECTION,
        selectedTraining: NO_SELECTION,
        selectedBarking: NO_SELECTION,
        apiSearchParams: "",
    },
    searchResults: {},
    loaded: false
};

let reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "save_Dog_Groups":
            return {
                ...state,
                doggroups: action.doggroups
            };

        case "save_Dog_Sizes":
            return {
                ...state,
                dogsizes: action.dogsizes
            };

        case "save_High_Low":
            return {
                ...state,
                highlowrange: action.highlowrange
            };

        case "save_Friendly_Range":
            return {
                ...state,
                friendlyrange: action.friendlyrange
            };

        case "save_Shedding_Range":
            return {
                ...state,
                sheddingrange: action.sheddingrange,
            };

        case "save_Easy_Range":
            return {
                ...state,
                easyrange: action.easyrange,
            };
    
        case "save_Barking_Range":
            return {
                ...state,
                barkingrange: action.barkingrange,
            };

        case "save_Filter_Selections":
            return {
                ...state,
                filterselections: action.filterselections,
            };

        case "Get_Select_Options": {
            return {
                ...state,
                loaded: true
            };
        }   

        case "save_Search_Results": {
            return {
                ...state,
                searchResults: action.searchResults
            };
        }   
            
        default: return state;
    }
};


export default reducer;