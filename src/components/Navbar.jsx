import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Logo = styled.img`
  height: 50px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li`

`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;
const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #980BBF;
    color: white;
    border-radius: 20px;
    border: 2px solid #F2CC0F;
    cursor: pointer;
`;

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./src/assets/img/kf-nbg-logo.png" />
          <List>
            <ListItem>About</ListItem>
            <ListItem>Services</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./src/assets/img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;
