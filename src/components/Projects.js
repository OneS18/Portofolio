import React from "react";
import styled from "styled-components";
import netflix from "../images/netflix-porto.png";
import linkedin from "../images/linkedin-porto.png";
import projects from "../images/projects.svg";

const Projects = () => {
  return (
    <div>
      <Title>
        <img className="title" src={projects} alt="" />
      </Title>
      <Project>
        <div className="project">
          <img src={netflix} alt="" />
        </div>
        <div className="project">
          <img src={linkedin} alt="" />
        </div>
      </Project>
    </div>
  );
};

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

const Project = styled.div`
  height: 100vh;
  .project {
    display: flex;
    justify-content: center;
    padding: 20px;

    img {
      opacity: 0.2;
      width: 100%;
      max-width: 70vh;
    }
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
`;

export default Projects;
