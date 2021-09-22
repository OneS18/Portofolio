import React from "react";
import styled from "styled-components";
import me from "../images/me-icons.png";
import { Link } from "react-router-dom";
// import AboutMe from "./AboutMe";

const Header = (props) => {
  return (
    <Headers>
      <Switch>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#chat">Let's talk</a>
          </li>
        </ul>
      </Switch>
      <Image>
        <img src={me} alt="" />
      </Image>
    </Headers>
  );
};

const Headers = styled.div`
  height: 100vh;
`;

const Image = styled.div`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70vh;
    margin-top: 100px;
    transition: transform 450ms;

    &:hover {
      transform: scale(1.08);
    }
    @media (max-width: 768px) {
    padding-top: 0;
    transition: transform 450ms;
    width: 50vh;

    &:hover {
      transform: scale(1.04);
    
  }
  }

`;

const Switch = styled.div`
  padding: 30px;
  text-align: center;
  background-image: linear-gradient(180deg, #825508 10%, rgb(206, 122, 13) 100%);
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0;
  }
  ul {
    display: flex;
    justify-content: space-between;
    text-align: center;

    
    @media (max-width: 768px) {
      display: block;
  }
    li {
      cursor: pointer;
      margin: 25px;
      list-style-type: none;
      color: black;
      text-decoration: none;
      font-size: 2rem;
      padding: 12px;
      transition: transform 450ms;

      
      &:hover {
          transform: scale(1.08);
        }
      a {
        font-family: "Roboto Slab", serif;
        text-decoration: none;
        color:black;
        font-weight: 900;
      }
    }
`;

export default Header;
