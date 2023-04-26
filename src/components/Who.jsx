import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
`;

const Card = styled.img`
    width: 0;
    flex-grow: 1;
    object-fit: cover;
    opacity: .8;
    transition: .5s ease;

    :hover{
        cursor: crosshair;
        width: 400px;
        opacity: 1;
    }
`

export default function Who() {
  return (
    <Wrapper>
      <Card src="../src/assets/img/profilepic.jpg"/>
      <Card src="../src/assets/img/profilepic.jpg"/>
      <Card src="../src/assets/img/profilepic.jpg"/>
      <Card src="../src/assets/img/profilepic.jpg"/>
    </Wrapper>
  );
}
