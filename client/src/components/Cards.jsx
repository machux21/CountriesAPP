import React from "react";
import Card from "./Card.jsx";
import styled from "styled-components";
const Container = styled.div`
  width: 98%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  border: 3px solid red;
`;

export default function Cards() {
  return (
    <>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </>
  );
}
