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

  /* mask-image: gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); */
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 65%,
    transparent 100%
  );
  position: relative;
  top: 10px;
  border-radius: 50%;
  height: 265px;
  width: 310px;
  background-color: rgba(255, 255, 255, 0);
  left: -10px;
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
