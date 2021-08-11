import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import pic from "./resource/profile1.png";
import P5Wrapper from "react-p5-wrapper";
import Boid from "./boid";
import Banner from "./resource/homepageBanner.png";
import Profile from "./resource/profilepic.png";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function Homepage() {
  let charac = "'!<>-_\\/[]{}—=+*^?";
  charac = charac.split("");
  const [isclicked, setIsclicked] = useState(true);
  const [char, setCurrentChar] = useState("");
  const [word, setWord] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);

  let phrases = ["NODE.JS", "MONGODB", "EXPRESS", "HTML", "CSS"];
  const [currentWord, setCurrentWord] = useState(phrases[wordIndex]);

  useInterval(() => {
    setCurrentChar(charac[Math.floor(Math.random() * charac.length)]);
  }, 50);

  const totalInterval = phrases.length * 4000;

  useInterval(() => {
    if (wordIndex < phrases.length) {
      setWordIndex(wordIndex + 1);
      setCurrentWord(phrases[wordIndex]);
      if (currentWord) {
        setWord(currentWord.split(""));
      }
    }
  }, 4000);

  useInterval(() => {
    setWordIndex(0);
  }, totalInterval);

  const randomChar = () => {
    return charac[Math.floor(Math.random() * charac.length)];
  };

  const [wordlength, setWordlength] = useState(0);
  useInterval(() => {
    setWordlength(wordlength + 1);
  }, 100);
  useInterval(() => {
    setWordlength(0);
  }, 4000);

  return (
    <Div>
      {" "}
      <Img2 src={Profile} />
      <Img src={Banner} />
      <Header isclicked={isclicked} setIsclicked={setIsclicked} />
      <Info>
        <Sidebar isclicked={isclicked} setIsclicked={setIsclicked} />
        <PersonalInfo>
          Hello, I'm Kulbir
          <br />
          <br />
          <br />
          <br />
          <br />
          <Sideways>
            Full Stack
            <br /> Web Developer
          </Sideways>
        </PersonalInfo>
        <Description></Description>
        <SkillInfo>
          Skill Set:
          <GeneratedTxt>
            {word.map((letter, index) => {
              if (index < wordlength) {
                return letter;
              } else {
                return randomChar();
              }
            })}
          </GeneratedTxt>
          <Skills>
            {phrases.map((phrase, index) => {
              if (index < wordIndex) {
                return <div>{phrase}</div>;
              }
            })}
          </Skills>
        </SkillInfo>
        <Resume href="https://github.com/Kulbir-Singh/portfolio/raw/main/Resume_KulbirSingh.pdf">
          Resume
        </Resume>
        <Resume href="#contact">Contact me</Resume>
      </Info>
    </Div>
  );
}

const Img2 = styled.img`
  position: absolute;
  z-index: 1;
  width: 300px;
  top: 10%;
  right: 10%;
  @media (max-width: 800px) {
    width: 30vw;
    position: absolute;
    top: 8%;
    right: 8%;
  }
`;

const Resume = styled.a`
  text-decoration: none;
  color: black;
  padding: 10px;
  border-radius: 20px;
  margin-right: 20px;
  opacity: 0.65;
  :hover {
    opacity: 1;
  }
  box-shadow: 0 0 20px -15px;
`;

const Description = styled.h1`
  animation: 1s ease-out 0s 1 slideInFromLeft;
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(200%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @media (max-width: 1300px) {
  }
  @media (max-width: 800px) {
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
`;

const PersonalInfo = styled.div`
  font-size: 3rem;
  color: #ffc815;
  padding: 0px;
  margin: 0px;
  padding-top: 7%;
  @media (max-width: 800px) {
    font-size: 1.5rem;
    padding-top: 20px;
  }
  width: 100%;
`;

const Sideways = styled.div`
  font-size: 3.5rem;
  color: black;
  font-weight: 1000;
  font-family: "Poppins", sans-serif;
  margin: none;
  padding: none;
  text-transform: uppercase;
  @media (max-width: 1300px) {
  }
  @media (max-width: 800px) {
    font-size: 3rem;
    font-weight: bolder;
  }
`;

const SkillInfo = styled.div`
  width: 73%;
  height: 22vh;
  animation: 1s ease-out 0s 1 slideInFromLeftx;
  @keyframes slideInFromLeftx {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media (max-width: 800px) {
    top: -25%;
    justify-content: center;
    flex-direction: column;
  } ;
`;

const Img = styled.img`
  width: 100vw;
  position: relative;
  top: -40px;
  height: 85vh;
  @media (max-width: 800px) {
    height: 50vh;
  }
`;

const Info = styled.div`
  height: 80vh;
  width: 98.75vw;
  position: relative;
  top: -78vh;
  left: 10%;
  @media (max-width: 800px) {
    top: -37vh;
    left: 8%;
  }
  @media (max-height: 750px) {
    top: -40vh;
    left: 8%;
  }
`;

const GeneratedTxt = styled.div`
  color: black;
  font-size: 3rem;
`;

const Div = styled.div`
  display: flex;
  margin: none;
  flex-direction: column;
  color: black;
  padding: none;
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  font-family: "Poppins", sans-serif;
`;

export default Homepage;
