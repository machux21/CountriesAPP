export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const FILTER = "FILTER";
export const LOADING = "LOADING";

//ACTION CREATORS
function showLoading() {
  return {
    type: LOADING,
  };
}

export function filters(filter = "countries", param = null) {
  const URL = {
    countries: "http://localhost:3001/countries",
    countriesAZ: "http://localhost:3001/filters/az",
    countriezZA: "http://localhost:3001/filters/za",
    activity: `http://localhost:3001/filters/activity/${param}`,
  };
  return function (dispatch) {
    dispatch(showLoading());
    return fetch(URL[filter])
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: FILTER, countries: json, loading: false });
      })
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
