import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { filterByAlphabet } from "../../Redux/actions/actions.js";
function Alphabet({filterByAlphabet}) {
  const handleChange = (e) => {
    if (e.target.value) {
      filterByAlphabet(e.target.value);
    }
  };
  return (
    <div>
      <select name="Alphabet" onChange={handleChange}>
        <option defaultValue="">Alphabet</option>
        <option value="AZ">A-Z</option>
        <option value="ZA">Z-A</option>
      </select>
    </div>
  );
}

export default connect(null, {
  filterByAlphabet,
})(Alphabet);
