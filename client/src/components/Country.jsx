import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getCountryDetail } from "../Redux/actions/actions.js";
function Country({ getCountryDetail, loading, country }) {
  const { id } = useParams();

  useEffect(() => {
    getCountryDetail(id);
  }, []);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <h1>{country.name}</h1>
      <img src={country.flag} alt="Country" />
      <h5>
        <strong>Capital: </strong>
        {country.capital}
      </h5>
      <h5>
        <strong>Subregion: </strong>
        {country.subregion}
      </h5>
      <h5>
        <strong>Area: </strong>
        {`${country.area} km`}
        <sup>2</sup>
      </h5>
      <h5>
        <strong>Population: </strong>
        {country.population}
      </h5>
      <h4>Tourism Activities</h4>
      <ul>
        {country.Activities ? (
          country.Activities.map((a) => {
            return <li>{a}</li>;
          })
        ) : (
          <li>Activities not found yet</li>
        )}
      </ul>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    country: state.countryDetail,
    loading: state.loading,
  };
}
export default connect(mapStateToProps, { getCountryDetail })(Country);
