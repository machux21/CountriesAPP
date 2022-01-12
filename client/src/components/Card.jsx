import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const CardContainer = styled.div`
width: 280px;
height: 350px;
padding 10px;
border: 3px solid black;
margin: 0 auto;
& ul {
  text-align: left;
}
& img{
  width: 100%;
  height: 30%;
}
`;
export default function Card({ name, flag, continent, id }) {
  return (
    <CardContainer>
      <Link to={`/country/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img src={flag} width="260" height="210" alt="dog img" />
      <h4>Continent:</h4>
      <span>{continent}</span>
    </CardContainer>
  );
}
