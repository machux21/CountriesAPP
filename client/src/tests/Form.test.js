import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../Redux/store/store.js";
import Form, { validate } from "../components/MainComponents/Form.jsx";

xdescribe("Validate function", () => {
  test("should return an object with an error message if name does not exist", () => {
    expect(
      validate({
        name: "",
        difficulty: 2,
        duration: 1,
        season: "Autumn",
        countries: ["ARG"],
      })
    ).toEqual({ name: "Name must contains at least three letters" });
  });
  test("should return an object with an error message if difficulty is less than 1 or greater than 5", () => {
    expect(
      validate({
        name: "Argentina",
        difficulty: 0,
        duration: 1,
        season: "Autumn",
        countries: ["ARG"],
      })
    ).toEqual({
      difficulty: "Difficulty must contains a number between 1 to 5",
    });
    expect(
      validate({
        name: "Argentina",
        difficulty: 6,
        duration: 1,
        season: "Autumn",
        countries: ["ARG"],
      })
    ).toEqual({
      difficulty: "Difficulty must contains a number between 1 to 5",
    });
  });

  test("should return an object with an error message if duration is less than 1", () => {
    expect(
      validate({
        name: "Argentina",
        difficulty: 3,
        duration: -1,
        season: "Autumn",
        countries: ["ARG"],
      })
    ).toEqual({ duration: "Duration must contains at least one month" });
  });
  test("should return an object with an error if season does not exist", () => {
    expect(
      validate({
        name: "Argentina",
        difficulty: 3,
        duration: 1,
        season: "",
        countries: ["ARG"],
      })
    ).toEqual({ season: "Choose a season or All year round" });
  });
  test("should return an object with an error if inputs.countries is equal to []", () => {
    expect(
      validate({
        name: "Argentina",
        difficulty: 3,
        duration: 1,
        season: "Autumn",
        countries: [],
      })
    ).toEqual({ countries: "Choose at least one country" });
  });
  test("should return an empty object if all fields are correct", () => {
    expect(
      validate({
        name: "Argentina",
        difficulty: 3,
        duration: 1,
        season: "Spring",
        countries: ["ARG"],
      })
    ).toEqual({});
  });
});

describe("Form component", () => {
  let component;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Router>
          <Form />
        </Router>
      </Provider>
    );
  });
  test("form is rendering...", () => {
    component.debug();
  });
  test("form contains labels", () => {
    component.getByText("Name");
    component.getByText("Difficulty");
    component.getByText("Duration (Months)");
    component.getByText("Season");
    component.getByText("Countries");
  });
  test("form contains inputs", () => {
    component.getByPlaceholderText("Activity name...");
    component.getByPlaceholderText("Number between 1 to 5");
  });
  test("the submit button should be hidden until all fields are completed", () => {
    const submit = component.getByText('Submit')
    expect(submit).toHaveStyle("display: none");
  });
});
