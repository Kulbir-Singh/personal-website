import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import pic from "./resource/profile.png";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketch";
import Boid from "./boid";

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
          {/* <div>Kulbir Singh</div> */}
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
        {/*  */}
      </Info>
      <Img src={pic} />
    </Div>
  );
}

const Img = styled.img`
  position: relative;
  top: -75%;
  right: -55%;
  border: 2px solid #00000010;
  object-fit: cover;
  /* z-index: -1; */
  height: 40%;
  box-shadow: 0px 0px 20px #00000010;
  background-color: white;
  @media (max-width: 1000px) {
    right: -51%;
    top: -76%;
  }
  @media (max-width: 800px) {
    width: 50%;
    top: -35%;
    right: -50%;
    display: none;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
`;

const PersonalInfo = styled.div`
  /* border: 2px solid green; */
  display: inline-block;
  align-items: center;
  height: 500px;

  /* mix-blend-mode: difference; */
  font-size: 2.5rem;
  @media (max-width: 800px) {
    padding-top: 65%;
  }
  div:nth-child(1) {
    color: black;
    font-weight: lighter;
    margin-left: 15px;
  }
`;

const SkillInfo = styled.div`
  width: 100%;
  /* padding-top: 180px; */
  position: relative;
  /* top: -50px;
  left: -10px; */
  height: 0%;

  @media (max-width: 800px) {
    min-width: 150px;
    top: 32px;
    left: -220px;
    height: 0%;
  }
  @media (max-width: 500px) {
    min-width: 150px;
    top: 85px;
    left: -210px;
    height: 0%;
  }
`;

const Sideways = styled.div`
  text-orientation: sideways;
  transform-origin: 0 0;
  font-size: 2.25rem;
  transition-duration: 1s;
  color: black;
  border: 25px solid lightblue;
  background-color: white;
  height: 60%;
  transform: translateX(45%) translateY(115%) rotate(-90deg);
  /* background: linear-gradient(
    40deg,
    lightblue 0%,
    lightblue 50%,
    transparent 0%
  ); */
  @media (max-width: 1300px) {
    height: 50%;
    width: 110%;
    transform: translateX(15px) translateY(290px) rotate(-90deg);
  }
  @media (max-width: 800px) {
    font-size: 40px;
    padding: 10px;
    border: 15px solid lightblue;
    margin-left: 20px;
    width: 100%;
    background: linear-gradient(
      45deg,
      lightblue 50%,
      lightblue 50%,
      transparent 0%
    );
    transform: translateX(25px) translateY(255px) rotate(-90deg);
    mix-blend-mode: difference;
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
  color: black;
  font-size: 3rem;
`;

const Div = styled.div`
  /* border: 2px solid black; */
  margin: none;
  color: black;
  padding: none;
  height: 100vh;
  /* margin: 10px 0px; */
  width: 100%;
  /* background: rgb(255, 113, 150);
  background: linear-gradient(
    270deg,
    rgba(250, 250, 250, 0.12088585434173671) 0%,
    rgba(113, 221, 255, 0.14889705882352944) 63%
  ); */
  /* background-color: transparent; */
`;

export default Homepage;
