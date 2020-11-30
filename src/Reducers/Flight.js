import { SET_FLIGHTS, SET_FAVORITES, UPDATE_FAVORITE } from './../Actions/Flights'

const initialState = {
  flights: [],
  favorites: []
};
  
const flight = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHTS:
      return {
        ...state,
        flights: action.flights,
      };
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };
    case UPDATE_FAVORITE:
      let fArray = [...state.favorites];
      const exist = fArray.findIndex(x => x.flightNumber === action.flightNumber);
      if(exist < 0) {
        fArray.push({ flightNumber: action.flightNumber, date: new Date() });
      }
      else {
        fArray.splice(exist, 1);
      }
      return {
        ...state,
        favorites: fArray,
      };
    default:
      return state;
  }
};

export default flight;