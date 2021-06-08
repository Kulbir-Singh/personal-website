import styled from "styled-components";
import pic from "./resource/profile1.png";

export default function About() {
  return (
    <Wrapper>
      <ImgDiv>
        {" "}
        <Img src={pic} />
      </ImgDiv>
      <p>
        I am an active learner who has completed an intensive Full Stack Web
        Development program from Concordia University. With an attention to
        detail, creativity and intuition, I am able to contribute to a dynamic
        workspace.
      </p>
    </Wrapper>
  );
}

const ImgDiv = styled.div`
  min-width: 350px;
  min-height: 350px;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 30px;
  @media (max-width: 800px) {
    margin-right: 0px;
    width: 250px;
    min-height: 350px;
  }
`;

const Img = styled.img`
  position: relative;
  top: 20px;
  left: -20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 100vw;
  margin: 0 12.5%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
