import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getCountries } from "../../Redux/actions/actions.js";
//COMPONENTS
import Card from "../Card.jsx";
import Filters from "../filters/Filters.jsx";
import Pagination from "../Pagination.jsx";
import NavBar from "../NavBar.jsx";
//IMAGES
import NotFound from "../../Resources/NotFound.png";
import Loading from "../../Resources/loading.gif"
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

  .not-found {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
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
        <img
          src={Loading}
          alt="world"
        />
      ) : (
        <Container>
          {currentCountries?.length > 0 ? (
            currentCountries.map((c, i) => {
              return (
                <Card
                  key={i}
                  name={c.name}
                  flag={c.flag}
                  continent={c.continent}
                  id={c.id}
                />
              );
            })
          ) : (
            <img className="not-found" src={NotFound} alt="not found" />
          )}
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
