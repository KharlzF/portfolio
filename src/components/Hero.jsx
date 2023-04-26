import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;
const TextMain = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 74px;
  -webkit-text-stroke: 1px darkturquoise;

`;
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const Line = styled.img`
    height: 5px;
`;
const Subtitle = styled.h2`
    color: turquoise;
`;
const Description = styled.p`
    font-size: 24px;
    color: lightgray;
`;
const Button2 = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;

`;
const Morph = styled.div`
  flex: 2;
  position: relative;
`;
const Img = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom:0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
        transform: translateY(20px);
    }
  }
`;

export default function Hero() {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <TextMain>
          <Title>Hi, I'm Carlos</Title>
          <WhatWeDo>
            <Line src="../src/assets/img/line.png"/>
             <Subtitle>I'm a Full Stack Web Developer</Subtitle>
          </WhatWeDo>
          <Description>Need a developer?</Description>
          <Button2>Insert Coin</Button2>
        </TextMain>
        <Morph>
          <Img src="../src/assets/img/bb-bubblegum.png" />
        </Morph>
      </Container>
    </Wrapper>
  );
}
