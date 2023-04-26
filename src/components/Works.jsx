import React from "react";
import styled from "styled-components";

const data = [
    "Web Design",
    "SEO",
    "Digital Marketing",
    "Brand Management",
    "Voice Over",
]

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
`;

const Box = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 20px;
    margin: 0 auto;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(43, 240, 251, 0.2);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ListItem = styled.li`
    font-size: 60px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px #F2CC0F;
    position: relative;

    ::after{
        content: "${(props)=>props.text}";
        position: absolute;
        top: 0;
        left: 0; 
        color: whitesmoke;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover{
        ::after{
            animation: moveText 0.3s linear both;

            @keyframes moveText {
                to{
                    width: 100%;
                }
            }
        }
    }

`;
const Morph = styled.div`
    flex: 1;
`

export default function Works() {
  return (
    <Wrapper>
      <Container>
        <Box>
            <List>
                {data.map((item) => (
                    <ListItem key={item} text={item}>{item}</ListItem>
                ))}
            </List>
        </Box>
        <Morph></Morph>
      </Container>
    </Wrapper>
  );
}
