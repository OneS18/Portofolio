import React from "react";
import styled from "styled-components";
import about from "../images/Untitled.svg";

const AboutMe = () => {
  return (
    <>
      <About>
        <Title>
          <img src={about} alt="" />
        </Title>
      </About>
      <Container>
        <Box>
          <Me>
            <h2>Hello</h2>
            <p>
              I'm Sergiu, a front-end developer who is hungry to learn new
              technologies, who likes the idea of development yourself, who
              likes to read (especially programming and personal development
              books) I learned to write code from Udemy , freeCodeCamp, YouTube
              and books. My goal for 2022 is to become a full stack web
              developer
            </p>
          </Me>
          <Skills>
            <h2>Skills</h2>
            <p>HTML</p>
            <p>CSS</p>
            <p>Styled Components</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Redux.js</p>
            <p>React Hooks</p>
            <p>Firebase</p>
            <p>Git</p>
          </Skills>
        </Box>
      </Container>
    </>
  );
};

const About = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 70px;
`;
const Title = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  img {
    margin-left: 60px;
    transition: transform 450ms;
    &:hover {
      transform: rotate(20deg);
    }
  }
`;

const Container = styled.div`
  margin-top: 10px;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  /* width: 100%; */
  height: 70vh;

  @media (max-width: 940px) {
    flex-direction: column;
  }
`;
const Me = styled.div`
  background-color: yellow;
  width: 49vh;
  border-radius: 20px;
  background: black;
  box-shadow: 40px 20px 3px yellow;
  transition: transform 450ms;
  height: 80vh;
  &:hover {
    transform: rotate(-5deg);
  }
  h2 {
    color: white;
    font-size: 3rem;
    font-family: "Playfair Display", serif;
    font-family: "Roboto Slab", serif;
    font-family: "Ubuntu", sans-serif;
    padding-bottom: 20px;
  }
  p {
    color: white;
    font-size: 30px;
    font-family: "Playfair Display", serif;
    font-family: "Roboto Slab", serif;
    font-family: "Ubuntu", sans-serif;
    padding-bottom: 20px;
    line-height: 35px;
    font-weight: 100;
    padding: 30px;
  }

  @media (max-width: 940px) {
    flex-direction: column;
    margin-left: 15px;
    height: 80vh;
    box-shadow: none;
    margin-top: 500px;
  }
`;
const Skills = styled.div`
  background-color: yellow;
  width: 49vh;
  border-radius: 20px;
  background: black;
  box-shadow: 40px 20px 3px yellow;
  transition: transform 450ms;
  &:hover {
    transform: rotate(5deg);
  }
  h2 {
    color: white;
    font-size: 3rem;
    font-family: "Playfair Display", serif;
    font-family: "Roboto Slab", serif;
    font-family: "Ubuntu", sans-serif;
  }
  p {
    color: white;
    font-size: 30px;
    font-family: "Playfair Display", serif;
    font-family: "Roboto Slab", serif;
    font-family: "Ubuntu", sans-serif;
    padding-bottom: 20px;
    line-height: 35px;
    font-weight: 100;
    /* padding: 30px; */
  }

  @media (max-width: 940px) {
    flex-direction: column;
    margin: 20px;
    height: 60vh;
    box-shadow: none;
  }
`;

export default AboutMe;
