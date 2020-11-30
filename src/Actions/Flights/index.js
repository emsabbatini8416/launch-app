import axios from "axios";

export const SET_FLIGHTS = 'SET_FLIGHTS';
export const SET_FAVORITES = 'SET_FAVORITES';
export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';

export const setFlights = (flights) => ({ type: SET_FLIGHTS, flights});
export const setFavorites = (favorites) => ({ type: SET_FAVORITES, favorites});
export const updateFavorite = (flightNumber) => ({ type: UPDATE_FAVORITE, flightNumber});

export const getFlights = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`http://localhost:5000/api/launch`)
      console.log(res.data)
      dispatch(setFlights(res.data));
    } catch (e) {
      console.log(e);
    }
  }
};

export const getFavorites = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`http://localhost:5000/api/favorite`)
      console.log(res.data)
      dispatch(setFavorites(res.data));
    } catch (e) {
      console.log(e);
    }
  }
};

export const addFavorite = (flightNumber) => {
  return async dispatch => {
    try {
      await axios.put(`http://localhost:5000/api/launch/${flightNumber}/addFavorite`);
      dispatch(updateFavorite(flightNumber));
    } catch (e) {
      console.log(e);
    }
  }
};

export const removeFavorite = (flightNumber) => {
  return async dispatch => {
    try {
      await axios.put(`http://localhost:5000/api/launch/${flightNumber}/removeFavorite`);
      dispatch(updateFavorite(flightNumber));
    } catch (e) {
      console.log(e);
    }
  }
};