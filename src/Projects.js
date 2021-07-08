import { useEffect } from "react";
import styled from "styled-components";
import Finance from "./resource/financelogin.PNG";

export default function Projects() {
  useEffect(() => {
    document.getElementById("box").addEventListener("onblur", myFunction);
    function myFunction() {
      document.getElementById("box").style.color = "red";
    }
  }, []);

  return (
    <Wrapper>
      <Project>
        <h1>Finance Network</h1>
        <div>
          <FinanceImg src={Finance} />
        </div>
        <Text>
          <strong>Description: </strong>The website is built for users that want
          to learn or share their ideas related to the finance industry. With
          features such as being able to follow a user, to share and bookmark
          articles, you're able to create connections with others that share
          similar interest as yours.
        </Text>
        <FinanceLink href="https://github.com/Kulbir-Singh/Finance-Website">
          Github
        </FinanceLink>
        <FinanceLink href="https://github.com/Kulbir-Singh/Finance-Website">
          Youtube
        </FinanceLink>
        <Text>
          {" "}
          <strong>Technologies:</strong>
          <br />
          React, Redux, Firebase, Node.js, Html, CSS, Mongodb
        </Text>
      </Project>
      <SubProjects>
        <Project1
          id="box"
          onClick={() => {
            let textbox = document.getElementById("box");
            textbox.style.height =
              textbox.style.height == "80vh" ? "10vh" : "80vh";
            document.getElementById("box1").style.height =
              document.getElementById("box1").style.height == "10vh"
                ? "80vh"
                : "10vh";
            if (document.getElementById("box1")?.style.height >= "70vh") {
              document.getElementById("arrow").style.display = "";
              document.getElementById("arrow1").style.display = "none";
            }
            if (document.getElementById("box1")?.style.height == "10vh") {
              document.getElementById("arrow").style.display = "none";
              document.getElementById("arrow1").style.display = "";
            }
          }}
        >
          <Div id="arrow">^</Div>
        </Project1>
        <Project2
          id="box1"
          onClick={() => {
            let textbox = document.getElementById("box1");
            if (document.getElementById("box1")?.style.height >= "70vh") {
              document.getElementById("arrow").style.display = "none";
              document.getElementById("arrow1").style.display = "";
            }
            if (document.getElementById("box1")?.style.height == "10vh") {
              document.getElementById("arrow").style.display = "";
              document.getElementById("arrow1").style.display = "none";
            }
            textbox.style.height =
              textbox.style.height == "80vh" ? "10vh" : "80vh";
            document.getElementById("box").style.height =
              document.getElementById("box").style.height == "10vh"
                ? "80vh"
                : "10vh";
          }}
        >
          <Div id="arrow1">^</Div>
        </Project2>
      </SubProjects>
    </Wrapper>
  );
}

const Div = styled.div``;

const SubProjects = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Project1 = styled.div`
  transition-duration: 1s;
  border-radius: 20px;
  display: flex;
  margin-top: 10vh;
  align-items: center;
  justify-content: center;
  width: 43vw;
  background-color: rgba(255, 255, 255, 0.81);
  height: 35vh;
  @media (max-width: 800px) {
    margin-top: 5vh;
    min-height: 40vh;
    width: 85vw;
  }
`;

const Project2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(255, 255, 255, 0.81);
  margin-top: 10px;
  transition-duration: 1s;
  border-radius: 20px;
  width: 43vw;
  height: 35vh;
  @media (max-width: 800px) {
    margin-top: 5vh;
    min-height: 40vh;
    width: 85vw;
  }
`;

const Text = styled.div`
  width: 80%;
`;

const FinanceLink = styled.a`
  color: black;
`;

const FinanceImg = styled.img`
  width: 90%;
  height: 100%;
  margin-left: 5%;
  object-fit: cover;
  transition-duration: 1s;
  @media (max-width: 800px) {
    width: 100%;
    position: sticky;
    -webkit-box-shadow: 8px 0px 16px 3px rgba(0, 0, 0, 0);
    box-shadow: 8px 0px 16px 3px rgba(0, 0, 0, 0);
    right: 0;
  }
  box-shadow: 0px 0px 20px #00000010;
`;

const Project = styled.div`
  width: 40vw;
  height: 80vh;
  border-radius: 20px;
  display: flex;
  transition-duration: 1s;
  flex-direction: column;
  margin: 0 5vw;
  margin-top: 10vh;
  background-color: rgba(255, 255, 255, 0.81);
  align-items: center;
  justify-content: space-around;
  @media (max-width: 800px) {
    margin-left: 0px;
    height: 65%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */
  align-items: center;
`;
