import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { searchCountry } from "../Redux/actions/actions.js";
import World from '../Resources/globe.png'

//styled-components
const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgb(0, 20, 39);
  border-bottom: 3px solid rgb(141, 8, 1);
  display: flex;
  justify-content: space-between;

  form{
    margin-right: 30px;
  }
`;
const NavUnlisted = styled.ul`
  display: flex;

  a {
    text-decoration: none;
  }

  li {
    color: white;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }
  li:hover {
    color: rgb(191, 6, 3);
  }
  img{
    width: 50px;
    height: 50px;
  }
`;
const Search = styled.input`
  width: 300px;
  height: 40px;
  margin: 15px;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 16px;
  background-color: rgb(112, 141, 175);
`;
const SearchButton = styled.button`
  height: 42px;
  width: 60px;
  background-color: rgb(141, 8, 1);
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: rgb(191, 6, 3);
  }
`;
function NavBar({ loading, countries, searchCountry }) {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCountry(search);
    setSearch("");
  };
  return (
    <NavContainer>
      <NavUnlisted>
        <Link to="/">
          <li><img src={World} alt="world"/></li>
        </Link>
        <Link to="/form">
          <li>Add Activity</li>
        </Link>
      </NavUnlisted>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Search
          value={search}
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Search by name..."
        />
        <SearchButton type="submit">Search</SearchButton>
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
