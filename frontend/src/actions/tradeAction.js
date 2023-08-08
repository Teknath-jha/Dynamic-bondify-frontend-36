import axios from "axios";

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
  UPDATE_TRADE_REQUEST,
  UPDATE_TRADE_SUCCESS,
  UPDATE_TRADE_FAIL,
  DELETE_TRADE_REQUEST,
  DELETE_TRADE_SUCCESS,
  DELETE_TRADE_FAIL,
  TRADE_DETAILS_REQUEST,
  TRADE_DETAILS_SUCCESS,
  TRADE_DETAILS_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  CLEAR_ERRORS,
} from "../constants/tradeConstants";

export const getSecurity =
  (keyword = "", currentPage = 1, category) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_TRADE_REQUEST,
      });

      let link = `/api/v1/securities/get`;

      if (category)
        link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${category}`;

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_TRADE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ALL_TRADE_FAIL,
        payload: err.response.data.message,
      });
    }
  };

export const getAdminSecurity = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_TRADE_REQUEST,
    });

    let link = `/api/v1/admin/products`;

    const { data } = await axios.get(link);

    dispatch({
      type: ADMIN_TRADE_SUCCESS,
      payload: data.products,
    });
  } catch (err) {
    dispatch({
      type: ADMIN_TRADE_FAIL,
      payload: err.response.data.message,
    });
  }
};

// Create Product
export const createSecurity = (productData) => async (dispatch) => {
  try {
    console.log(productData);
    dispatch({
      type: NEW_TRADE_REQUEST,
    });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    let link = `/api/v1/products/new`;

    const { data } = await axios.post(link, productData, config);

    dispatch({
      type: NEW_TRADE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NEW_TRADE_FAIL,
      payload: err.response.data.message,
    });
  }
};

// Update Product
export const updateSecurity = (id, productData) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_TRADE_REQUEST,
    });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    let link =`/api/v1/product/${id}`;

    const { data } = await axios.put(link, productData, config);

    dispatch({
      type: UPDATE_TRADE_SUCCESS,
      payload: data.success,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_TRADE_FAIL,
      payload: err.response.data.message,
    });
  }
};

// Delete Product --By owner of product as well as admin
export const deleteSecurity = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_TRADE_REQUEST,
    });

    let link = `/api/v1/product/${id}`;

    const { data } = await axios.delete(link);

    dispatch({
      type: DELETE_TRADE_SUCCESS,
      payload: data.success,
    });
  } catch (err) {
    dispatch({
      type: DELETE_TRADE_FAIL,
      payload: err.response.data.message,
    });
  }
};

// Get Product Details
export const getSecurityDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TRADE_DETAILS_REQUEST,
    });

    let link = `/api/v1/product/${id}`;

    const { data } = await axios.get(link);

    dispatch({
      type: TRADE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TRADE_DETAILS_FAIL,
      payload: err.response.data.message,
    });
  }
};

// New Review
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_REVIEW_REQUEST,
    });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    let link = `/api/v1/review`;

    const { data } = await axios.put(link, reviewData, config);

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (err) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: err.response.data.message,
    });
  }
};

// Clearing the errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
