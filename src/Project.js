import styled from "styled-components";
import Finance from "./resource/financehomepage.png";
import Watch from "./resource/e-commerce-homepage.png";
import SocialNetwork from "./resource/signin.png";

export default function Project() {
  return (
    <Wrapper>
      <Lines></Lines>{" "}
      <P2 className="p2">
        <Description>
          <Img2 src={Watch} />
        </Description>
        <Title>Social Network</Title>
      </P2>
      <P1 className="p1">
        <Title>Finance Network</Title>{" "}
        <Description>
          <Img src={Finance} />
          The website is built for users that want to learn or share their ideas
          related to the finance industry. With features such as being able to
          follow a user, to share and bookmark articles, you're able to create
          connections with others that share similar interest as yours.
        </Description>
      </P1>
      <P3 className="p3">
        <Description>
          {" "}
          <Img3 src={SocialNetwork} />
        </Description>
        <Title>E-Commerce</Title>
      </P3>
    </Wrapper>
  );
}

const Lines = styled.div`
  position: absolute;
`;

const Img2 = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  transition-duration: 1s;
`;

const Img3 = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  transition-duration: 1s;
`;

const Img = styled.img`
  width: 100%;
  position: absolute;
  left: 0%;
  height: 100%;
  transition-duration: 1s;
`;

const Title = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
  font-weight: bolder;
  margin: 0;
  width: 40%;
  @media (max-width: 800px) {
    font-size: 35px;
  }
`;

const Description = styled.div`
  width: 70%;
  position: relative;
  overflow: hidden;
  :hover {
    img:nth-child(n) {
      opacity: 0;
      left: 100%;
    }
  }
`;

const Wrapper = styled.div`
  width: 79vw;
  margin-left: 9.75vw;
  position: relative;
  padding-top: 10vh;
`;

const P1 = styled.div`
  display: flex;
  height: 50vh;

  margin: 20vh 0;
  div:nth-child(2) {
    :hover {
      img:nth-child(n) {
        opacity: 0;
        left: -100%;
      }
    }
  }
  padding: 20px;
  border-radius: 20px;
  border: 10px solid #ffeba7;
`;
const P2 = styled.div`
  display: flex;
  height: 31vh;
  height: 50vh;
  padding: 20px;
  border-radius: 20px;
  border: 10px solid #ffeba7;
`;
const P3 = styled.div`
  display: flex;
  height: 31vh;
  height: 50vh;
  padding: 20px;
  border-radius: 20px;
  border: 10px solid #ffeba7;
`;
