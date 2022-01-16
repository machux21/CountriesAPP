import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCountryDetail } from "../../Redux/actions/actions.js";
const Container = styled.div`
  display: flex;
  justify-content: space-around;

  .data {
    text-align: left;
    list-style-type: square;
    list-style-position: inside;
    li {
      padding: 10px 20px;
      background-color: #eeeeee;
      border: 1px solid #dddddd;
    }
  }
  img {
    width: 600px;
    height: 400px;
  }
`;
const Button = styled(Link)`
  display: inline-block;
  position: relative;
  left: 20px;
  height: 40px;
  width: 120px;
  background-color: rgb(112, 141, 175);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  line-height: 40px;
  color: white;
  transition: 0.4s;

  &:hover {
    background-color: rgb(0, 20, 39);
  }
`;
function Country({ getCountryDetail, loading, country }) {
  const { id } = useParams();

  useEffect(() => {
    getCountryDetail(id);
  }, []);

  return (
    <>
      <div
        style={{
          padding: "20px",
        }}
      >
        <Button to="/home">Back</Button>
        <h1>{country.name}</h1>
      </div>
      <Container>
        <img src={country.flag} alt="Country" />
        <ul className="data">
          <li>
            <strong>Capital: </strong>
            {country.capital}
          </li>
          <li>
            <strong>Subregion: </strong>
            {country.subregion}
          </li>
          <li>
            <strong>Area: </strong>
            {`${country.area} km`}
            <sup>2</sup>
          </li>
          <li>
            <strong>Population: </strong>
            {country.population}
          </li>
        </ul>
        <div>
          <h4>Tourism Activities</h4>
          <ul>
            {country?.Activities?.length > 0 ? (
              country.Activities.map((a, i) => {
                return (
                  <li key={i}>
                    <ul>
                      <li>{a.name}</li>
                      <li>Difficulty: {a.difficulty}</li>
                      <li>Duration: {a.duration}</li>
                      <li>Season: {a.season}</li>
                    </ul>
                  </li>
                );
              })
            ) : (
              <li>No activities</li>
            )}
          </ul>
        </div>
      </Container>
    </>
  );
}
function mapStateToProps(state) {
  return {
    country: state.countryDetail,
    loading: state.loading,
  };
}
export default connect(mapStateToProps, { getCountryDetail })(Country);
