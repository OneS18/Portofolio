import React from "react";
import styled from "styled-components";
import netflix from "../images/NETFLIX.png";
import linkedin from "../images/linkedin-porto.png";
import projects from "../images/projects.svg";
import github from "../images/github-logo.svg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Title>
        <img className="title" src={projects} alt="" />
      </Title>
      <Project>
        <h1>Netflix Clone</h1>
        <div className="project">
          <img src={netflix} alt="" />
        </div>
        <OpenSource>
          <p>
            <a href="https://d8188093.netflix-5cc.pages.dev/">View Live</a>
          </p>
          <a href="https://github.com/OneS18/Netflix">
            <img src={github} alt="" />
          </a>
        </OpenSource>
        <h1>Linkedin Clone</h1>
        <div className="project">
          <img src={linkedin} alt="" />
        </div>
        <OpenSource>
          <p>
            <a href="https://github.com/OneS18/Linkedin">View Live</a>
          </p>
          <a href="https://github.com/OneS18/Linkedin">
            <img src={github} alt="" />
          </a>
        </OpenSource>
      </Project>
    </div>
  );
};

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: transform 450ms;

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

const Project = styled.div`
  height: 100vh;

  h1 {
    display: flex;
    justify-content: center;
    padding: 50px 0 10px;
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    letter-spacing: 2px;
    word-spacing: 10px;
  }
  .project {
    display: flex;
    justify-content: center;
    padding: 20px;

    img {
      width: 100%;
      max-width: 100vh;
      border-radius: 30px;
      box-shadow: 10px 5px 20px black;
      transition: transform 450ms;
      :hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.08);
      }
    }

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
`;
const OpenSource = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  p {
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    background: black;
    box-shadow: 10px 10px 10px black;
    transition: transform 450ms;

    :hover {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.08);
    }

    a {
      font-family: "Roboto Slab", serif;
      color: white;
      font-weight: 900;
      text-decoration: none;
    }
  }
  img {
    width: 3rem;
    margin: 10px;
    transition: transform 450ms;
    :hover {
      transform: skew(-10deg);
    }
  }

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export default Projects;
