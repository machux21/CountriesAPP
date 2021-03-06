import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCountryDetail } from "../../Redux/actions/actions.js";

//styled-components
const Container = styled.div`
  display: flex;
  justify-content: space-around;

  .data {
    margin-top: 50px;
    text-align: left;
    list-style-type: square;
    list-style-position: inside;
    li {
      padding: 20px 40px;
      background-color: #eeeeee;
      border: 1px solid #dddddd;
    }
  }

  img {
    width: 600px;
    height: 400px;
  }
`;
const ActivititesContainer = styled.div`
  margin-top: 30px;
  h3{
    line-height: 40px;
    background-color: red;
    color:white;
  }
  ul {
    color: white;
    text-align: left;
    list-style-type: none;
      li {
      padding: 5px 10px;
      margin: 5px;
      background-color: rgb(0, 20, 39);
      border-radius: 15px;
      ul {
        list-style-type: square;
        border: 1px solid rgb(112, 141, 175);
        border-radius: 15px;
      }
    }
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
  transition: 0.2s;

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
        <div>
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
        </div>
      </Container>
      <ActivititesContainer>
        <h3>Tourism Activities</h3>
        <ul className="activities-info">
          {country.Activities?.length > 0 ? (
            country.Activities.map((a, i) => {
              return (
                <li key={i}>
                  <ul>
                    <li>
                      <strong>Name:</strong> {a.name}
                    </li>
                    <li>
                      <strong>Difficulty:</strong> {a.difficulty}
                    </li>
                    <li>
                      <strong>Duration:</strong> {a.duration}
                    </li>
                    <li>
                      <strong>Season:</strong> {a.season}
                    </li>
                  </ul>
                </li>
              );
            })
          ) : (
            <li>
              <strong>No activities</strong>
            </li>
          )}
        </ul>
      </ActivititesContainer>
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
