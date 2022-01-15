import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const indexContainer = styled.div`
  background-image: url("https://www.vectortemplates.com/bincdn2/files/editor_images/maps-world-map-03.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export default function Index() {
  return (
    <indexContainer>
      <h3>Welcome to Countries APP!</h3>
      <Link to="/home">Start</Link>
    </indexContainer>
  );
}
