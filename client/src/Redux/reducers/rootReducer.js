/**
 *  rootReducer reducer
 */

// Import Action Types
import {
  LOADING,
  SEARCH,
  SHOW_ALL_COUNTRIES,
  FILTER_BY_ALPHABET,
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  FILTER_BY_POPULATION,
  GET_ACTIVITIES,
  GET_COUNTRY_DETAIL,
  GET_COUNTRIES,
} from "../actions/actions.js";

const initialState = {
  countries: [],
  inmutableCountries: [],
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
    case SEARCH:
      return {
        ...state,
        loading: action.loading,
        countries: action.countries,
      };
    case SHOW_ALL_COUNTRIES:
      return {
        ...state,
        countries: state.inmutableCountries,
      };
    case FILTER_BY_ALPHABET:
      return {
        ...state,
        loading: action.loading,
        countries: action.countries,
      };
    case FILTER_BY_ACTIVITY:
      return {
        ...state,
        loading: action.loading,
        countries: action.countries,
      };
    case FILTER_BY_CONTINENT:
      return {
        ...state,
        countries: state.inmutableCountries.filter(
          (c) => c.continent === action.continent
        ),
      };

    case FILTER_BY_POPULATION:
      return {
        ...state,
        loading: action.loading,
        countries: action.countries,
      };

    case GET_COUNTRIES:
      return {
        ...state,
        loading: action.loading,
        countries: action.countries,
        inmutableCountries: action.countries,
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        loading: action.loading,
        countryDetail: action.country,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.activities,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
