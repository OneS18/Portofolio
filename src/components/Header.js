import React from "react";
import styled from "styled-components";
import me from "../images/me-icons.png";

const Header = () => {
  return (
    <div>
      <Switch>
        <ul>
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Let's talk</a>
          </li>
        </ul>
      </Switch>
      <Image>
        <img src={me} alt="" />
      </Image>
    </div>
  );
};

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
      }
    }
`;

export default Header;
