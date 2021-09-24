import React from "react";
import styled from "styled-components";
import about from "../images/about.svg";

const AboutMe = () => {
  return (
    <>
      <About id="about">
        <Title>
          <img src={about} alt="" />
        </Title>
      </About>
      <Container>
        <div className="section me">
          <div className="text">
            <h1>Hello</h1>
            <p>
              I'm Sergiu, a front-end developer who is hungry to learn new
              technologies, who likes the idea of development yourself, who
              likes to read (especially programming and personal development
              books) I learned to write code from Udemy , freeCodeCamp, YouTube
              and books. My goal for 2022 is to become a full stack web
              developer
            </p>
          </div>
        </div>
        <div className="section about">
          <div className="text">
            <h1>Skills</h1>
            <p>HTML</p>
            <p>CSS</p>
            <p>SCSS</p>
            <p>Styled Components</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Redux.js</p>
            <p>React Hooks</p>
            <p>Firebase</p>
            <p>Git</p>
          </div>
        </div>
      </Container>
    </>
  );
};

const About = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 70px;
  margin-bottom: 50px;
`;
const Title = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 50px;

  @media (max-width: 768px) {
    width: 85%;
  }
  img {
    margin-left: 60px;
    transition: transform 450ms;
    &:hover {
      transform: rotate(20deg);
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .section {
    margin: 10px;
    width: 40%;
    height: 50vh;
    background: red;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: black;
    border-radius: 10px;
    box-shadow: 10px 5px 20px black;
    transition: ease-out 500ms;
    color: white;
    padding: 20px;

    &:hover {
      background: white;
      color: black;
      box-shadow: 10px 5px 20px white;
    }

    @media (max-width: 768px) {
      width: 95%;
    }

    .text {
      justify-content: center;
      text-align: center;
      padding: 10px;
      font-weight: 700;
      line-height: 2rem;
      font-family: "Playfair Display", serif;
      font-family: "Roboto Slab", serif;
      font-family: "Ubuntu", sans-serif;
      font-size: 1rem;
      /* color: white; */
      transition: ease-out 500ms;

      &:hover {
        color: black;
      }

      @media (max-width: 768px) {
        line-height: 1.3rem;
      }

      h1 {
        font-size: 1.8rem;
        margin-bottom: 20px;
        text-align: center;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default AboutMe;
