import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getCountries } from "../../Redux/actions/actions.js";
//COMPONENTS
import Card from "../Card.jsx";
import Filters from "../filters/Filters.jsx";
import Pagination from "../Pagination.jsx";
import NavBar from "../NavBar.jsx";

//styled
const Container = styled.div`
  width: 98%;
  height: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
`;

function Home({ countries, loading, getCountries }) {
  useEffect(() => {
    getCountries();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const paginate = (number) => {
    setCurrentPage(number);
  };
  return (
    <>
      <NavBar />
      <Filters />
      <Pagination
        paginate={paginate}
        countriesLength={countries.length}
        countriesPerPage={countriesPerPage}
      />
      {loading ? (
        <img src="https://cdn.dribbble.com/users/587388/screenshots/2676888/globe.gif" alt="world"/>
      ) : (
        <Container>
          {currentCountries.map((c, i) => {
            return (
              <Card
                key={i}
                name={c.name}
                flag={c.flag}
                continent={c.continent}
                id={c.id}
              />
            );
          })}
        </Container>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    loading: state.loading,
  };
}
export default connect(mapStateToProps, { getCountries })(Home);
