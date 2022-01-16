import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const CardContainer = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  background-color: rgb(239, 243, 213);
  border-radius: 10px;
  text-decoration: none;
  margin: 0 auto;
  padding: 0px;
  transition: transform 0.8s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: scale(1.3);
  }
  img {
    width: 250px;
    height: 130px;
  }
  h2 {
    margin: 7px auto;
  }
  h4 {
    font-weight: 300;
  }
`;
export default function Card({ name, flag, continent, id }) {
  return (
    <CardContainer>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/country/${id}`}
      >
        <img src={flag} alt={name} />
        <div>
          <h2>{name}</h2>
          <h4 className="name">{continent}</h4>
        </div>
      </Link>
    </CardContainer>
  );
}
