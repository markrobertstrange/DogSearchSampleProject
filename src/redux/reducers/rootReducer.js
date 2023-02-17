    import { combineReducers } from 'redux';
    import dogreducer from '../reducers/dogsreducer.js';

    const rootReducer = combineReducers({
        dogstorage: dogreducer,
    });

    export default rootReducer;