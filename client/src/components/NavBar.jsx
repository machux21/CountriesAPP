import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { searchCountry } from "../Redux/actions/actions.js";
const NavContainer = styled.div`
  width: 99.5vw;
  height: 150px;
  margin: 0 auto;
  border: 3px solid blue;
`;

function NavBar({ loading, countries, searchCountry }) {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search)
    searchCountry(search);
    setSearch("");
  };
  return (
    <NavContainer>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/form">Add Activity</NavLink>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={search}
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Search by name"
        />
        <button type="submit">Search</button>
      </form>
    </NavContainer>
  );
}
function mapStateToProps(state) {
  return {
    loading: state.loading,
  };
}
export default connect(mapStateToProps, { searchCountry })(NavBar);
