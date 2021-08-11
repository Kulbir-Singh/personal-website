import styled from "styled-components";
import pic from "./resource/profile1.png";

export default function About() {
  return (
    <Wrapper>
      <Info>
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
      </Info>
    </Wrapper>
  );
}

const Info = styled.div`
  background-color: white;
  width: 90%;
  height: 40vh;
  overflow: hidden;
  display: flex;
  border-radius: 20px;
  align-items: flex-end;
  p:nth-child(n) {
    font-size: 30px;
    padding-right: 10px;
    line-height: 70px;
  }
  @media (max-width: 800px) {
    flex-direction: row;
    p:nth-child(n) {
      font-size: 10px;
      padding-right: 10px;
      line-height: 7em;
    }
  }
`;

const Img2 = styled.img`
  position: relative;
  top: -100px;
`;

const Div = styled.div``;

const ImgDiv = styled.div`
  min-width: 350px;
  min-height: 350px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    margin-right: 0px;
    width: 250px;
    min-height: 350px;
  }
`;

const Img = styled.img`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 65%,
    transparent 100%
  ); */
  position: relative;
  top: 50px;
  height: 300px;
  width: 410px;
  background-color: rgba(255, 255, 255, 0);
  left: -10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  max-width: 100vw;
`;
