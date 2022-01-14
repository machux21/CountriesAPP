import React, { useEffect } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 98.5vw;
  height: 80px;
  padding-top: 50px;
  border: 3px solid green;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
`;
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
            <button
              key={n}
              style={{ height: "30px" }}
              onClick={() => {
                paginate(n);
              }}
            >
              {n}
            </button>
          );
        })}
    </Nav>
  );
}
