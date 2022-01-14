

// ACTION FILTERS
export const FILTER_BY_ALPHABET = "FILTER_BY_ALPHABET";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const FILTER_BY_POPULATION = "FILTER_BY_POPULATION";
//GETS
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";

export const LOADING = "LOADING";
export const SEARCH = "SEARCH";
export const SHOW_ALL_COUNTRIES = "SHOW_ALL_COUNTRIES";
export const PAGINATION = "PAGINATION"
//ACTION CREATORS
function showLoading() {
  return {
    type: LOADING,
  };
}
export function showAll() {
  return {
    type: SHOW_ALL_COUNTRIES,
  };
}

export function searchCountry(name) {
  return function (dispatch) {
    dispatch(showLoading());
    return fetch(`http://localhost:3001/countries?name=${name}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: SEARCH, countries: json, loading: false });
      })
      .catch((e) => console.log(e));
  };
}

export function setPagination(countries){
  return{
    type: PAGINATION,
    countries
  }
}
//ACTION CREATORS FILTERS
export function filterByContinent(continent) {
  return {
    type: FILTER_BY_CONTINENT,
    continent,
  };
}

export function filterByAlphabet(order) {
  return function (dispatch) {
    dispatch(showLoading());
    return fetch(`http://localhost:3001/filters/countries/${order}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: FILTER_BY_ALPHABET, countries: json, loading: false });
      })
      .catch((e) => console.log(e));
  };
}

export function filterByActivity(activity) {
  return function (dispatch) {
    dispatch(showLoading());
    return fetch(`http://localhost:3001/filters/activity/${activity}`)
      .then((res) => res.json())
      .then((json) =>
        dispatch({ type: FILTER_BY_ACTIVITY, countries: json, loading: false })
      )
      .catch((e) => console.log(e));
  };
}
export function filterByPopulation(order) {
  return async function (dispatch) {
    dispatch(showLoading());
    console.log(order);
    return fetch(`http://localhost:3001/filters/population/${order}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: FILTER_BY_POPULATION,
          countries: json,
          loading: false,
        });
      })
      .catch((e) => console.log(e.message));
  };
}

//ACTION CREATORS GETS
export function getActivities() {
  return function (dispatch) {
    return fetch("http://localhost:3001/activity")
      .then((res) => res.json())
      .then((json) => dispatch({ type: GET_ACTIVITIES, activities: json }))
      .catch((e) => console.log(e));
  };
}

export function getCountries() {
  return function (dispatch) {
    dispatch(showLoading());
    return fetch("http://localhost:3001/countries")
      .then((res) => res.json())
      .then((json) =>
        dispatch({ type: GET_COUNTRIES, countries: json, loading: false })
      )
      .catch((e) => console.log(e));
  };
}

export function getCountryDetail(id) {
  return function (dispatch) {
    dispatch(showLoading());
    return fetch(`http://localhost:3001/countries/${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: GET_COUNTRY_DETAIL, country: json, loading: false });
      })
      .catch((e) => console.log(e));
  };
}
