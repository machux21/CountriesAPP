import React from "react";
import NavBar from "../components/NavBar.jsx";
export default function Form() {
  return (
    <>
      <NavBar />
      <form>
        <fieldset>
          <legend>
            <h2>Create Dog</h2>
          </legend>
          <label>
            Name
            <input type="text" />
          </label>
          <br />
          <label>
            Weight (Kg)
            <input type="number" min="0" max="300" />
          </label>
          <div>
            <h4>Height</h4>
            <label>
              Max Height
              <input type="number" min="0" max="300" />
            </label>
            <label>
              Min Height
              <input type="number" />
            </label>
          </div>

          <br />
          <label>
            Life span
            <input type="number" />
          </label>
          <br />
          <label>
            Temperaments
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </>
  );
}
