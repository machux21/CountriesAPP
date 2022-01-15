import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { showAll } from "../../Redux/actions/actions.js";

//IMPORT COMPONENTS
import Activity from "./Activity.jsx";
import Alphabet from "./Alphabet.jsx";
import Continent from "./Continent.jsx";
import Population from "./Population.jsx";
//STYLED COMPONENTS
const FilterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 20px auto;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Button = styled.button`
  height: 40px;
  width: 70px;
  background-color: rgb(191, 6, 3);
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: rgb(141, 8, 1);
  }
`;
//FILTERS COMPONENT
function Filters({ showAll }) {
  return (
    <FilterContainer>
      <Activity />
      <Alphabet />
      <Continent />
      <Population />
      <Button
        onClick={(e) => {
          e.preventDefault();
          showAll();
        }}
      >
        Show All
      </Button>
    </FilterContainer>
  );
}

export default connect(null, { showAll })(Filters);
