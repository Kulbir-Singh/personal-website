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
          <Img2 src={Watch} /> <h2>Description:</h2>
          To Build a website to have a network of users connecting to each
          other. With the login feature you are able to see who is connected to
          who and add new connections.This is a website for bikini bottom
          residences. Sign In to see who’s connected to who and build new
          connections.
          <br /> <br />
          <FinanceLink
            onClick={() =>
              window.open(
                "https://github.com/Kulbir-Singh/BikiniBottom-Network"
              )
            }
          >
            Github
          </FinanceLink>
          <br />
          <br />
          <h2>Technologies:</h2>
          React, Javascript, Html, CSS
        </Description>
        <Title>Social Network</Title>
      </P2>
      <P1 className="p1">
        <Title>Finance Network</Title>{" "}
        <Description>
          <Img src={Finance} />
          <h2>Description:</h2>
          The website is built for users that want to learn or share their ideas
          related to the finance industry. With features such as being able to
          follow a user, to share and bookmark articles, you're able to create
          connections with others that share similar interest as yours.
          <br /> <br />
          <FinanceLink
            onClick={() =>
              window.open("https://github.com/Kulbir-Singh/Finance-Website")
            }
          >
            Github
          </FinanceLink>
          <br />
          <br />
          <h2>Technologies:</h2>
          React, Javascript, Html, CSS
        </Description>
      </P1>
      <P3 className="p3">
        <Description>
          {" "}
          <Img3 src={SocialNetwork} />
          <h2> Description:</h2>
          An ecommerce website where you can find all types of wearables.
          Description: A one stop shop for all your wearable needs. This project
          focuses on building an e-commerce website that is user friendly. With
          features such as a filtering system, category, and a search bar.{" "}
          <br /> <br />{" "}
          <FinanceLink
            onClick={() =>
              window.open("https://github.com/Kulbir-Singh/E-commerce-project")
            }
          >
            Github
          </FinanceLink>
          <br /> <br />
          <h2>Technologies:</h2> React, Redux, Node.js, Html, CSS
        </Description>
        <Title>E-Commerce</Title>
      </P3>
    </Wrapper>
  );
}

const Lines = styled.div`
  position: absolute;
`;
const FinanceLink = styled.a`
  color: black;
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;
const Img2 = styled.img`
  width: 99%;
  height: 99%;
  position: absolute;
  border: 2px solid black;
  left: 0px;
  transition-duration: 1s;
`;

const Img3 = styled.img`
  width: 99%;
  height: 99%;
  position: absolute;
  left: 0;
  border: 2px solid black;
  transition-duration: 1s;
`;

const Img = styled.img`
  width: 99%;
  position: absolute;
  left: 0%;
  border: 2px solid black;
  height: 99%;
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
    font-size: 1.5rem;
    width: 100%;
  }
`;

const Description = styled.div`
  width: 70%;
  position: relative;
  overflow: hidden;
  font-size: 1.2rem;
  :hover {
    img:nth-child(n) {
      opacity: 0;
      left: 100%;
    }
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 0.9rem;
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
  /* border: 10px solid #ffeba7; */
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
const P2 = styled.div`
  display: flex;
  height: 31vh;
  height: 50vh;
  padding: 20px;
  border-radius: 20px;
  /* border: 10px solid #ffeba7; */
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const P3 = styled.div`
  display: flex;
  height: 31vh;
  height: 50vh;
  padding: 20px;
  border-radius: 20px;
  /* border: 10px solid #ffeba7; */
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
