import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { filterByContinent } from "../../Redux/actions/actions.js";
const Select = styled.select`
  width: 180px;
  height: 40px;
  background-color: rgb(0, 20, 39);
  font-size: 16px;
  padding-left: 5px;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover{
    border-bottom: 3px solid rgb(141, 8, 1);
  }
`;
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
      <Select name="Continent" onChange={handleChange}>
        <option value="">Continents</option>
        {continents.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default connect(null, {
  filterByContinent,
})(Continent);
