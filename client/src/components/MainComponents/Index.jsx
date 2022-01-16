import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Maps from "../../Resources/maps.webp";
const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  background-image: url("https://bestanimations.com/Earth&Space/Earth/earthglobeanimation/earth-travel-globe-spinning-animated-gif-8.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 48px;
    font-weight: bold;
    color: white;
  }
`;
const Button = styled(Link)`
  display: inline-block;
  height: 60px;
  width: 180px;
  background-color: rgb(112, 141, 175);
  border: none;
  border-radius: 60px;
  font-size: 24px;
  text-decoration: none;
  line-height: 57px;
  color: white;
  transition:  transform 0.4s;

  text-decoration: none;
  color: white;

  &:hover {
    transform: scale(1.2);
    background-color: white;
    color: rgb(0, 20, 39);
  }
`;
export default function Index() {
  return (
    <Container>
      <span>Welcome to Countries APP!</span>
      <div style={{ marginTop: "20px" }}>
        <Button to="/home">START</Button>
      </div>
    </Container>
  );
}
