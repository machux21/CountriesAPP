import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
export default function Card(props) {
  return (
    <CardContainer>
      <NavLink to="/dog/name">
        <h2>Name</h2>{" "}
      </NavLink>
      <img
        src="https://t2.ea.ltmcdn.com/es/images/1/8/2/img_enfermedades_mas_comunes_del_dogo_argentino_23281_600.jpg"
        alt="dog img"
      />
      <ul>
        <p>Temperament</p>
        <li>Bueno</li>
        <li>Fuerte</li>
        <li>Poderoso</li>
        <p>Peso</p>
        <li>70kg</li>
      </ul>
    </CardContainer>
  );
}
