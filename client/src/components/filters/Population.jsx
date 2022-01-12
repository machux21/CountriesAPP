import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { filterByPopulation } from "../../Redux/actions/actions.js";
function Population({filterByPopulation}) {
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value) {
      filterByPopulation(e.target.value);
    }
  };
  return (
    <div>
      <select name="Population" onChange={(e) => handleChange(e)}>
        <option defaultValue="">Order Population</option>
        <option value="desc">Most populated</option>
        <option value="asc">Least populated</option>
      </select>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

export default connect(mapStateToProps, {
  filterByPopulation,
})(Population);
