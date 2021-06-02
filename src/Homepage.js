import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import P5Wrapper from "react-p5-wrapper";

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
      {" "}
      <Header isclicked={isclicked} setIsclicked={setIsclicked} />
      <Info>
        <Sidebar isclicked={isclicked} setIsclicked={setIsclicked} />
        <PersonalInfo>
          <div>Kulbir Singh</div>
          <Sideways>Full Stack Web Developer</Sideways>
        </PersonalInfo>
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
      </Info>
    </Div>
  );
}

const Skills = styled.div`
  display: flex;
  flex-direction: column;
`;

const PersonalInfo = styled.div`
  /* border: 2px solid green; */
  display: inline-block;
  align-items: center;
  height: 500px;
  mix-blend-mode: difference;
  font-size: 2.5rem;
  @media (max-width: 800px) {
    padding-top: 65%;
  }
  div:nth-child(1) {
    color: white;
    font-weight: lighter;
    margin-left: 15px;
  }
`;

const SkillInfo = styled.div`
  width: 100%;
  padding-top: 180px;
  position: relative;
  top: -50px;

  left: -10px;
  height: 0%;
  mix-blend-mode: difference;
  @media (max-width: 800px) {
    min-width: 150px;
    top: 32px;
    left: -220px;
    height: 0%;
  }
  @media (max-width: 500px) {
    min-width: 150px;
    top: -22px;
    left: -220px;
    height: 0%;
  }
`;

const Sideways = styled.div`
  text-orientation: sideways;
  transform-origin: 0 0;
  font-size: 2.25rem;
  transition-duration: 1s;
  color: black;
  border: 25px solid white;
  mix-blend-mode: difference;
  background-color: lightgray;
  height: 40%;
  transform: translateX(45%) translateY(115%) rotate(-90deg);
  @media (max-width: 800px) {
    font-size: 40px;
    padding: 10px;
    border: 15px solid white;
    margin-left: 20px;
    transform: translateX(-5px) translateY(225px) rotate(-90deg);
  } ;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
  height: 100%;
  width: 50%;
  @media (max-width: 800px) {
    justify-content: center;
  } ;
`;

const GeneratedTxt = styled.div`
  color: white;
  font-size: 3rem;
`;
const Div = styled.div`
  /* border: 2px solid black; */
  margin: none;
  color: white;
  padding: none;
  height: 100vh;
  margin: 10px 20px;
  background-color: black;
`;

export default Homepage;
