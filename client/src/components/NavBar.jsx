import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 99.5vw;
  height: 150px;
  margin: 0 auto;
  border: 3px solid blue;
`;

export default function NavBar() {
  return (
    <NavContainer>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/form">Add New Dog</NavLink>
      <form>
        <input type="text" placeholder="Search by name" />
        <button type="submit">Search</button>
      </form>
    </NavContainer>
  );
}
