import {
    ALL_TRADE_REQUEST,
    ALL_TRADE_SUCCESS,
    ALL_TRADE_FAIL,
    ADMIN_TRADE_REQUEST,
    ADMIN_TRADE_SUCCESS,
    ADMIN_TRADE_FAIL,
    NEW_TRADE_REQUEST,
    NEW_TRADE_SUCCESS,
    NEW_TRADE_FAIL,
    NEW_TRADE_RESET,
    UPDATE_TRADE_REQUEST,
    UPDATE_TRADE_SUCCESS,
    UPDATE_TRADE_FAIL,
    UPDATE_TRADE_RESET,
    DELETE_TRADE_REQUEST,
    DELETE_TRADE_SUCCESS,
    DELETE_TRADE_FAIL,
    DELETE_TRADE_RESET,
    TRADE_DETAILS_REQUEST,
    TRADE_DETAILS_SUCCESS,
    TRADE_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_RESET,
    CLEAR_ERRORS,
} from "../constants/tradeConstants";

export const tradesReducer = (state = { products: [] }, action) => {

    switch (action.type) {
        case ALL_TRADE_REQUEST:
        case ADMIN_TRADE_REQUEST:
            return {
                loading: true,
                products: [] ,
            }

        case ALL_TRADE_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resultPerPage: action.payload.resultPerPage,
                filteredProductsCount: action.payload.filteredProductsCount,
            }

        case ADMIN_TRADE_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            }

        case ALL_TRADE_FAIL:
        case ADMIN_TRADE_FAIL:
            return {
                loading: false,
                error: action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,

            }
        default:
            return state;
    }

};



export const newTradeReducer = (state = {product: {}}, action) => {
    switch (action.type) {
        case NEW_TRADE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_TRADE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product,
            };
        case NEW_TRADE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case NEW_TRADE_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};


export const tradeReducer = (state = {}, action) => {

    switch (action.type) {
        case DELETE_TRADE_REQUEST:
        case UPDATE_TRADE_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case DELETE_TRADE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            }
        
        case UPDATE_TRADE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            }

        case DELETE_TRADE_FAIL:
        case UPDATE_TRADE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case DELETE_TRADE_RESET:
            return {
                ...state,
                isDeleted: false,
            }
        case UPDATE_TRADE_RESET:
            return {
                ...state,
                isUpdated: false,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,

            }
        default:
            return state;
    }

};


export const tradeDetailsReducer = (state = { trade: {},user:{} }, action) => {

    console.log(action.type);
    switch (action.type) {
        case TRADE_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            }

        case TRADE_DETAILS_SUCCESS:
            return {
                loading: false,
                trade: action.payload.trade,
                user:action.payload.user
            }

        case TRADE_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,

            }
        default:
            return state;
    }

};



export const newReviewReducer = (state = {}, action) => {

    switch (action.type) {
        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload.trade,
            }

        case NEW_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,

            }
        default:
            return state;
    }

};



