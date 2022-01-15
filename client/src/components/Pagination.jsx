import React, { useEffect } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
`;
const IndexButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  border: none;
  color: white;
  box-shadow: 2px 2px 4px 0px grey;
  background-color: rgb(191, 6, 3);
  &:hover{
    background-color: rgb(141, 8, 1);
  }
`
export default function Pagination({
  countriesLength,
  paginate,
  countriesPerPage,
}) {
  useEffect(() => {
    paginate(1);
  }, [countriesLength]);
  const numberOfPages = [];
  for (let i = 1; i <= Math.ceil(countriesLength / countriesPerPage); i++) {
    numberOfPages.push(i);
  }

  return (
    <Nav>
      {numberOfPages &&
        numberOfPages.map((n) => {
          return (
            <IndexButton
              key={n}
              onClick={() => {
                paginate(n);
              }}
            >
              {n}
            </IndexButton>
          );
        })}
    </Nav>
  );
}
