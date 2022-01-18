import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

//styled-components
const Container = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  p {
    font-weight: 300;
  }
  fieldset {
    margin: 20px;
    background-color: rgb(0, 20, 39);
    border: none;
    border-radius: 20px;
  }
  fieldset legend {
    height: 60px;
    width: 500px;
    background: rgb(141, 8, 1);
    border-radius: 10px;
    padding: 4px;
    line-height: 5px;
    font-weight: bold;
    color: white;
    &:hover {
      background-color: rgb(191, 6, 3);
    }
  }
  input {
    width: 300px;
    height: 40px;
    margin: 15px;
    border: none;
    color: white;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 16px;
    background-color: rgb(112, 141, 175);
  }
  select {
    width: 300px;
    height: 40px;
    background-color: rgb(141, 8, 1);
    font-size: 16px;
    padding-left: 5px;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
      border-bottom: 3px solid rgb(112, 141, 175);
    }
  }
  button {
  }
  input[disabled] {
    display: none;
  }
  form {
    ul {
      list-style-type: none;
    }
  }
`;
const Button = styled(Link)`
  margin-top: 10px;
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
const Submit = styled.button`
  height: 50px;
  width: 250px;
  background-color: rgb(191, 6, 3);
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: rgb(141, 8, 1);
  }
  &[disabled] {
    display: none;
  }
`;
//handle errors with validate function
export function validate(inputs) {
  const errors = {};
  if (!inputs.name || inputs.name.length < 4) {
    errors.name = "Name must contains at least three letters";
  }
  if (!inputs.difficulty || inputs.difficulty > 5 || inputs.difficulty < 1) {
    errors.difficulty = "Difficulty must contains a number between 1 to 5";
  }
  if (!inputs.duration || inputs.duration < 1) {
    errors.duration = "Duration must contains at least one month";
  }
  if (!inputs.season) {
    errors.season = "Choose a season or All year round";
  }
  if (inputs.countries.length === 0) {
    errors.countries = "Choose at least one country";
  }
  return errors;
}

function Form({ COUNTRIES }) {
  const [errors, setErrors] = useState({
    name: "Name is required",
    difficulty: "Choose a dificulty",
    duration: "Choose a duration",
    season: "Choose a season",
    countries: "Choose at least one country",
  });

  const [data, setData] = useState({
    name: "",
    difficulty: 0,
    duration: "",
    season: "",
    countries: [],
  });

  const listCountries = COUNTRIES.map((c) => {
    return {
      id: c.id,
      name: c.name,
    };
  }).sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1; //nameA comes first
    }
    if (nameA > nameB) {
      return 1; // nameB comes first
    }
    return 0; // names must be equal
  });

  //handle seasons select values
  const handleSeasons = (e) => {
    if (e.target.value) {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
      setErrors(validate({ ...data, [e.target.name]: data[e.target.name] }));
    }
  };

  //handle countries select values
  const handleCountries = (e) => {
    if (e.target.value) {
      setData({
        ...data,
        [e.target.name]: [...data.countries, e.target.value],
      });
      setErrors(validate({ ...data, [e.target.name]: e.target.value }));
    }
  };
  //handle input changes
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors(validate({ ...data, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        duration: `${data.duration} ${data.duration > 1 ? "months" : "month"}`,
      }),
    };
    await fetch("http://localhost:3001/activity", requestOptions)
      .then((res) => res.json())
      .then((json) => alert(json))
      .catch((e) => alert(e.message));
    setData({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    e.target.reset();
    setErrors({
      name: "Name is required",
      difficulty: "Choose a dificulty",
      duration: "Choose a duration",
      season: "Choose a season",
      countries: "Choose at least one country",
    });
  };

  return (
    <Container>
      <Button to="/home">Back</Button>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h2>Create Tourism Activity</h2>
          </legend>
          <label>
            Name
            <p style={{ color: "red" }}>{errors.name}</p>
            <input
              type="text"
              name="name"
              placeholder="Activity name..."
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Difficulty
            <p style={{ color: "red" }}>{errors.difficulty}</p>
            <input
              type="number"
              name="difficulty"
              placeholder="Number between 1 to 5"
              min="1"
              max="5"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Duration (Months)
            <p style={{ color: "red" }}>{errors.duration}</p>
            <input
              name="duration"
              type="number"
              min="1"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Season
            <p style={{ color: "red" }}>{errors.season}</p>
            <select name="season" onChange={handleSeasons}>
              <option value="">Choose Season</option>
              <option value="All year round">All year round</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
            </select>
          </label>
          <br />
          <label>
            Countries
            <p style={{ color: "red" }}>{errors.countries}</p>
            <select name="countries" onChange={handleCountries}>
              <option value="">Choose Countries</option>
              {listCountries.map((c, i) => (
                <option key={i} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <ul>
            {data.countries.map((c, i) => {
              let country = listCountries.find((n) => n.id === c);
              return <li key={i}>{country.name}</li>;
            })}
          </ul>
          <br />
          <Submit
            disabled={Object.entries(errors).length === 0 ? false : true}
            type="submit"
          >
            Submit
          </Submit>
        </fieldset>
      </form>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    COUNTRIES: state.inmutableCountries,
  };
}
export default connect(mapStateToProps, null)(Form);
