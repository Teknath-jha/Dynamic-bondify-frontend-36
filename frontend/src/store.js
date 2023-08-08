import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { tradesReducer, tradeDetailsReducer, newTradeReducer, tradeReducer } from './reducers/tradeReducer';
import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from './reducers/userReducer';

const reducer = combineReducers({
    trades: tradesReducer,
    tradeDetails: tradeDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    newTrade: newTradeReducer,
    trade: tradeReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
});

let initialState = {
    
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;