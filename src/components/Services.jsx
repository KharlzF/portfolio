import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const Title = styled.h2`
  color: #f2cc0f;
  font-weight: 500;
  padding: 20px;
`;

const Showcase = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  color: #f2cc0f;
`;

const CardImg = styled.img`
width: 200px;
    flex-grow: 1;
    object-fit: cover;
    opacity: .8;
    transition: .5s ease;

    :hover{
        cursor: crosshair;
        width: 400px;
        opacity: 1;
        }
`;

const BtnGlitch = styled.button``;

export default function Services() {
  return (
    <Wrapper>
      <Container>
        <Title>Looking for something?</Title>
        <Showcase>
          <Card>
            <CardTitle>Service 1</CardTitle>
            <CardImg src="../src/assets/img/mixtape.png" />
          </Card>
          <Card>
            <CardTitle>Service 2</CardTitle>
            <CardImg src="../src/assets/img/mixtape.png"/>
          </Card>
          <Card>
            <CardTitle>Service 3</CardTitle>
            <CardImg src="../src/assets/img/mixtape.png"/>
          </Card>
        </Showcase>
        <BtnGlitch>DO YOU WANT TO KNOW MORE?</BtnGlitch>
      </Container>
    </Wrapper>
  );
}
