import styled from "styled-components";
import Finance from "./resource/financelogin.PNG";

export default function Projects() {
  return (
    <Wrapper>
      <Project>
        <div>
          <FinanceImg src={Finance} />
        </div>
        <div>
          <strong>Description:</strong>The website is built for users that want
          to learn or share their ideas related to the finance industry. With
          features such as being able to follow a user, to share and bookmark
          articles, you're able to create connections with others that share
          similar interest as yours.
          <FinanceLink href="https://github.com/Kulbir-Singh/Finance-Website">
            Github
          </FinanceLink>
          <FinanceLink href="https://github.com/Kulbir-Singh/Finance-Website">
            Youtube
          </FinanceLink>
          <p>
            <strong>Technologies:</strong>
            <br />
            React, Redux, Firebase, Node.js, Html, CSS, Mongodb
          </p>
        </div>
      </Project>
    </Wrapper>
  );
}

const FinanceLink = styled.a`
  color: white;
`;

const FinanceImg = styled.img`
  width: 40vw;
  height: 100%;
  position: relative;
  right: 25%;
  object-fit: cover;
  transition-duration: 1s;
  @media (max-width: 800px) {
    width: 100%;
    position: sticky;
    -webkit-box-shadow: 8px 0px 16px 3px rgba(0, 0, 0, 0);
    box-shadow: 8px 0px 16px 3px rgba(0, 0, 0, 0);
    right: 0;
  }
  /* -webkit-box-shadow: 8px 0px 16px 3px rgba(0, 0, 0, 0.66);
  box-shadow: 8px 0px 16px 3px rgba(0, 0, 0, 0.66); */
  box-shadow: 0px 0px 20px #00000010;
`;

const Project = styled.div`
  width: 60%;
  height: 75%;
  margin-left: 100px;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  border: 2px solid #00000010;
  /* box-shadow: 0px 10px 20px lightsteelblue; */
  /* border: 20px sold white; */
  @media (max-width: 800px) {
    margin-top: 0%;
    margin-left: 0px;
    height: 75%;
    width: 75%;
  }
  div:nth-child(2) {
    height: 100%;
    color: black;
    font-size: 1.5rem;
    margin: 0 20px;
    width: 45%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* line-height: 2.75vw; */
    @media (max-width: 1200px) {
      font-size: 2vw;
    }
    @media (max-width: 800px) {
      height: 50%;
      width: 100%;
      font-size: 0.9rem;
    }
  }

  div:nth-child(1) {
    height: 90%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* overflow: hidden; */
    transition-duration: 1s;
    @media (max-width: 800px) {
      height: 50%;
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    /* overflow: hidden; */
  }
`;

const Wrapper = styled.div`
  height: 90vh;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1c1c1c;
  align-items: center;
`;
