import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { filterByAlphabet } from "../../Redux/actions/actions.js";

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
function Alphabet({ filterByAlphabet }) {
  const handleChange = (e) => {
    if (e.target.value) {
      filterByAlphabet(e.target.value);
    }
  };
  return (
    <div>
      <Select name="Alphabet" onChange={handleChange}>
        <option value="">Alphabet</option>
        <option value="AZ">A-Z</option>
        <option value="ZA">Z-A</option>
      </Select>
    </div>
  );
}

export default connect(null, {
  filterByAlphabet,
})(Alphabet);
