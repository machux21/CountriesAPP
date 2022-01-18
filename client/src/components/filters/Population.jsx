import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { filterByPopulation } from "../../Redux/actions/actions.js";
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
function Population({ filterByPopulation }) {
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value) {
      filterByPopulation(e.target.value);
    }
  };
  return (
    <div>
      <Select name="Population" onChange={(e) => handleChange(e)}>
        <option value="">Population</option>
        <option value="desc">Most populated</option>
        <option value="asc">Least populated</option>
      </Select>
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
