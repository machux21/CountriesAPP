import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Card from "./Card.jsx";
import { getCountries } from "../Redux/actions/actions.js";

const Container = styled.div`
  width: 98%;
  height: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  border: 3px solid red;
`;

function Cards({ countries, filters, loading, getCountries }) {
  useEffect(() => {
    if (countries.length < 246) {
      getCountries();
    }
  }, []);
  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <Container>
      {countries.map((c, i) => {
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
  );
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    loading: state.loading,
  };
}
export default connect(mapStateToProps, { getCountries })(Cards);
