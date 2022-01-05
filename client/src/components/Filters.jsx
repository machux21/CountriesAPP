import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  width: 98.6vw;
  height: 100%;
  border: 3px solid orangered;
`;

export default function Filters() {
  return (
    <FilterContainer>
      <h3>FILTRO</h3>
    </FilterContainer>
  );
}
