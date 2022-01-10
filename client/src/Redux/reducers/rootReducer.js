/**
 *  rootReducer reducer
 */

// Import Action Types
import { LOADING, FILTER, GET_COUNTRY_DETAIL } from "../actions/actions.js";

const initialState = {
  countries: [],
  countryDetail: {},
  activities: [],
  loading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case FILTER:
      return {
        ...state,
        loading: action.loading,
        countries: action.countries,
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        loading: action.loading,
        countryDetail: action.country,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
