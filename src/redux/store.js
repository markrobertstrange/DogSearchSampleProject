import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk' 
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer';


// Apply the middleware to the store
const logger = createLogger();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger, thunk)
    ),
);

export default store;