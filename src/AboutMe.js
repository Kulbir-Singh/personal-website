import styled from "styled-components";
import Pic from "./resource/Pic2.png";
import Background from "./resource/background.png";

export default function AboutMe({ isclicked, setIsclicked }) {
  return (
    <Wrapper>
      {" "}
      <Text>
        <H2>About Me</H2>I am an active learner who has completed an intensive
        Full Stack Web Development program from Concordia University. With an
        attention to detail, creativity and intuition, I am able to contribute
        to a dynamic workspace.{" "}
      </Text>
      <Img2 src={Background} />
      <Img src={Pic} />
    </Wrapper>
  );
}

const H2 = styled.h2`
  color: white;
`;

const Text = styled.div`
  color: grey;
  position: relative;
  width: 39vw;
  top: 60%;
  line-height: 25px;
  right: -50%;
  font-size: 1.2rem;
  @media (max-width: 800px) {
    width: 80vw;
    font-size: 1rem;
    top: 70%;
    right: -10%;
  }
`;

const Img2 = styled.img`
  width: 100vw;
  height: 100vh;
`;

const Img = styled.img`
  width: 35vw;
  position: relative;
  top: -75vh;
  left: 50px;
  @media (max-width: 800px) {
    width: 50vw;
    position: relative;
    top: -80vh;
    left: 10px;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;
