import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//handle errors with validate function
function validate(inputs) {
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
      setErrors(validate({ ...data, [e.target.name]: e.target.value }));
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
    <>
      <Link to="/home">Back</Link>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h2>Create Tourism Activity</h2>
          </legend>
          <label>
            Name
            <p style={{ color: "red" }}>{errors.name}</p>
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <br />
          <label>
            Difficulty
            <p style={{ color: "red" }}>{errors.difficulty}</p>
            <input
              type="number"
              name="difficulty"
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
          <input
            disabled={Object.entries(errors).length === 0 ? false : true}
            type="submit"
            value="Submit"
          />
        </fieldset>
      </form>
    </>
  );
}
function mapStateToProps(state) {
  return {
    COUNTRIES: state.inmutableCountries,
  };
}
export default connect(mapStateToProps, null)(Form);
