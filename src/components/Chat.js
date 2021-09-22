import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import title from "../images/chat-title-anime.png";
import github from "../images/github-logo.svg";
import linkedin from "../images/linkedin-logo.svg";
import twitter from "../images/twitter.svg";

const Chat = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i1p2xa9",
        "template_tvpjfvq",
        form.current,
        "user_iSleAMgV2B7T11vlY27KD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container id="chat">
      <Title>
        <img src={title} alt="" />
      </Title>
      <Row>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-title">
            <h1>Let me know you</h1>
          </div>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Your Name..." />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Your Email..." />
          <label>Subject</label>
          <input type="text" name="subject" placeholder="The Subject..." />
          <label>Message</label>
          <textarea name="message" />
          <input className="btn" type="submit" value="Send" />
        </form>
      </Row>
      <Or>
        <h2>or</h2>
      </Or>
      <Icons>
        <Box>
          <a href="https://github.com/OneS18">
            <img src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/trif-sergiu-664a831b7/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://twitter.com/home?lang=en">
            <img src={twitter} alt="" />
          </a>
        </Box>
      </Icons>
    </Container>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  /* margin-right: 50%; */
`;

const Container = styled.div`
  margin-top: 20vh;
`;
const Row = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;

  form {
    width: 90%;
    max-width: 70vh;
    display: flex;
    justify-content: center;
    background: red;
    flex-direction: column;
    padding: 20px;
    background: black;
    border-radius: 20px;

    .form-title {
      display: flex;
      justify-content: center;
      h1 {
        padding: 40px;
        color: white;
        font-size: 30px;
        font-family: "Roboto Slab", serif;
      }
    }

    label {
      font-family: "Roboto Slab", serif;
      padding: 5px;
      color: white;
    }

    input {
      height: 50px;
      padding: 10px;
      color: black;
      border-radius: 10px;
    }
    textarea {
      height: 200px;
      color: black;
      border-radius: 10px;
      font-size: 20px;
      resize: none;
    }
    .btn {
      border: 1px solid white;
      font-family: "Roboto Slab", serif;
      margin-top: 20px;
      font-weight: 900;
      transition: transform 150ms;
      background-color: black;
      color: white;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        background-color: white;
        color: black;
      }
    }
  }
`;

const Or = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    font-family: "Roboto Slab", serif;
    padding: 50px;
    font-size: 30px;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;


  img {
    width: 50px;
    padding: 10px;
    transition: transform 450ms;

    &:hover {
      transform: scale(1.5);
  }
`;

export default Chat;
