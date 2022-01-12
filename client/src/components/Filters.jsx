import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { showAll } from "../Redux/actions/actions.js";

//IMPORT COMPONENTS
import Activity from "./filters/Activity.jsx";
import Alphabet from "./filters/Alphabet.jsx";
import Continent from "./filters/Continent.jsx";
import Population from "./filters/Population.jsx";
//STYLED COMPONENTS
const FilterContainer = styled.div`
  width: 98.6vw;
  height: 100%;
  border: 3px solid orangered;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
`;

//FILTERS COMPONENT
function Filters({ showAll }) {
  return (
    <FilterContainer>
      <Activity />
      <Alphabet />
      <Continent />
      <Population />
      <button
        onClick={(e) => {
          e.preventDefault();
          showAll();
        }}
      >
        Show All
      </button>
    </FilterContainer>
  );
}

export default connect(null, { showAll })(Filters);
