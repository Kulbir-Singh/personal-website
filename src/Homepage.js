import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import pic from "./resource/profile1.png";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketch";
import Boid from "./boid";
import Water from "./resource/water.mp4";

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
  console.log(window.location.pathname);

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
      <Header isclicked={isclicked} setIsclicked={setIsclicked} />
      <Info>
        <Sidebar isclicked={isclicked} setIsclicked={setIsclicked} />
        <PersonalInfo>
          Hello, I'm Kulbir{" "}
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
        <Resume href="https://github.com/Kulbir-Singh/portfolio/raw/main/Resume_KulbirSingh.pdf">
          Contact me
        </Resume>
      </Info>
    </Div>
  );
}

const Resume = styled.a`
  text-decoration: none;
  color: #15a3e6;
  padding: 10px;
  border-radius: 20px;
  margin-right: 20px;
  background: white;
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
  font-size: 2rem;
  color: #15a3e6;
  padding: 0px;
  margin: 0px;
  padding-top: 7%;
  @media (max-width: 800px) {
    font-size: 2rem;
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
  @media (max-width: 800px) {
    top: -25%;
  }
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
    justify-content: center;
    flex-direction: column;
  } ;
`;

const Info = styled.div`
  border-radius: 20px;
  height: 80vh;
  width: 90vw;
  padding: 0 2.5vw 0 5vw;
  margin: 10vh 5vw;
  box-shadow: 0 0 20px -15px;
  background: linear-gradient(
    to right bottom,
    rgba(158, 218, 234, 0.5),
    rgba(158, 255, 195, 0.1)
  );
  @media (max-width: 800px) {
    margin: 10vh 2vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  /* backdrop-filter: blur(2rem); */
`;

const GeneratedTxt = styled.div`
  color: black;
  font-size: 3rem;
`;

const Div = styled.div`
  display: flex;
  margin: none;
  color: black;
  padding: none;
  height: 100vh;
  width: 100%;
  font-family: "Poppins", sans-serif;
`;

export default Homepage;
