import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { filterByContinent } from "../../Redux/actions/actions.js";
function Continent({ filterByContinent }) {
  const continents = [
    "Africa",
    "Antarctica",
    "Asia",
    "Europe",
    "North America",
    "Oceania",
    "South America",
  ];
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value) {
      filterByContinent(e.target.value);
    }
  };
  return (
    <div>
      <select name="Continent" onChange={handleChange}>
        <option value="">Continents</option>
        {continents.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}

export default connect(null, {
  filterByContinent,
})(Continent);
