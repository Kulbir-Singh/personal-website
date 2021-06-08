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
      </Info>{" "}
      <Description>
        I specialize in Web Developing. Experienced on both front-end and
        back-end
      </Description>
    </Div>
  );
}

const Description = styled.h1`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 5px;
  justify-content: center;
  top: -35%;
  left: 30%;
  width: 60%;
  min-height: 200px;
  background: white;
  border: 10px solid black;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  @keyframes slideInFromLeft {
    0% {
      transform: translateY(200%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media (max-width: 800px) {
    top: -50%;
    left: 38%;
    width: 50%;
  }
`;

const Img = styled.img`
  position: relative;
  top: -75%;
  right: -55%;
  /* border: 2px solid #00000010; */
  object-fit: cover;
  /* z-index: -1; */
  height: 40%;
  /* box-shadow: 0px 0px 20px #00000010; */
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
  height: 200px;
`;

const PersonalInfo = styled.div`
  /* mix-blend-mode: difference; */
  @media (max-width: 800px) {
  }
  font-size: 2.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  div:nth-child(1) {
    color: black;
    font-weight: lighter;
  }
`;

const Sideways = styled.div`
  /* text-orientation: sideways; */
  /* transform-origin: 0 0; */
  font-size: 3.5rem;
  transition-duration: 1s;
  color: black;
  border: 10px solid rgba(0, 0, 0, 1);
  width: 75%;
  position: relative;
  top: 40%;
  height: 500px;
  /* transform: translateX(45%) translateY(115%); */
  @media (max-width: 1300px) {
    /* transform: translateX(15px) translateY(290px) ; */
  }
  @media (max-width: 800px) {
    top: 20%;
    background: linear-gradient(
      45deg,
      #c5f1fc 50%,
      #f0fff6 50%,
      transparent 50%
    );
    /* transform: translateX(25px) translateY(255px) rotate(-90deg); */
  }
  border-image-slice: 1;
  border-image-source: #9edaea;

  /* animation: changing 15s ease infinite;
  @keyframes changing {
    0% {
      border-image-source: linear-gradient(to top, #fff, #d53a9d);
    }
    25% {
      border-image-source: linear-gradient(to top, #743ad5, #fff);
    }
    50% {
      border-image-source: linear-gradient(to top, #fff, #d53a9d);
    }
    75% {
      border-image-source: linear-gradient(to top, #fff, #d53a9d);
    }
    100% {
      border-image-source: linear-gradient(to top, #743ad5, #fff);
    }
  } */
`;

const SkillInfo = styled.div`
  width: 73%;
  /* padding-top: 180px; */
  /* position: relative; */
  /* top: -50px;
  left: -10px; */
  position: relative;
  top: -23%;
  height: 100%;
  @media (max-width: 800px) {
    top: -25%;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
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
