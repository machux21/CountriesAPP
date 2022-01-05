//REACT
import React from "react";

//COMPONENTS
import NavBar from "../components/NavBar.jsx";

export default function Detail() {
  return (
    <>
      <NavBar />
      <div>
      <h1>Dog Name</h1>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FvrNbbW4ovtydPPlrQKtKQHaFh%26pid%3DApi&f=1" alt="dog"/>
      <h4>Temperaments</h4>
    <ul>
        <li>Powerfull</li>
        <li>Happy</li>
        <li>lazy</li>
        <li>Brave</li>
      </ul>
      <h4>Height:160cm</h4>
      <h4>Weight:80kg</h4>
      <h4>Life Span:160cm</h4>
      </div>
    </>
  );
}
