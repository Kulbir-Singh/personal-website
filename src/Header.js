import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Header({ isclicked, setIsclicked }) {
  return (
    <Ham>
      {" "}
      <Name href="#home">
        K<Extra>ulbir</Extra> S<Extra>ingh</Extra>
      </Name>
      <TopMenu>
        <SubHeader>
          <div>
            <HeaderLink href="#project">Projects</HeaderLink>
          </div>
          <div>
            <HeaderLink href="#about">About</HeaderLink>
          </div>
          <div>
            <HeaderLink href="#contact">Contact</HeaderLink>
          </div>
        </SubHeader>
      </TopMenu>
      <HamDiv
        onClick={() => {
          setIsclicked(!isclicked);
        }}
      >
        <Ham1 isclicked={isclicked}></Ham1>
        <Ham2 isclicked={isclicked}></Ham2>
        <Ham3 isclicked={isclicked}></Ham3>
      </HamDiv>
    </Ham>
  );
}

const Extra = styled.p`
  padding: 0;
  margin: 0;
  width: 0px;
  opacity: 0;
  transition-duration: 1s;
  /* animation: 1s ease-out 0s 1 slideInFromLeftx; */
  /* animation-delay: 2s; */
  /* @keyframes slideInFromLeftx { */
  /* 0% {
      transform: translateX(-350%);
    }
    25% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(-100%);
    }
    75% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  } */
`;

const HeaderLink = styled.a`
  color: white;
  text-decoration: none;
  display: inline-block;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
`;

const Name = styled.a`
  border: none;
  text-decoration: none;
  padding-left: 20px;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 1.5em;
  padding-right: 5%;
  transition-duration: 1s;
  :hover {
    p:nth-child(n) {
      width: 50px;
      opacity: 1;
    }
  }
  animation: 1s ease-out 0s 1 slideInFromLeftx;
  width: 50%;
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-right: 10px;
  align-items: flex-end;
  div:nth-child(n) {
    cursor: pointer;
  }
`;

const TopMenu = styled.div`
  width: 50%;
  display: flex;
  @media (max-width: 800px) {
    display: none;
  }
`;

const HamDiv = styled.div`
  display: none;
  flex-direction: column;
  padding-right: 10px;
  cursor: pointer;
  width: 50%;
  color: white;
  height: 100%;
  align-items: flex-end;
  @media (max-width: 800px) {
    display: flex;
    padding: 10px;
    padding-right: 20px;
  }
`;

const Ham = styled.div`
  position: fixed;
  top: 0%;
  width: 100%;
  display: flex;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.92);
  justify-content: space-between;
  align-items: center;
  transition-duration: 1s;
  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
  }
  /* display: none; */
  z-index: 10;
`;

const Ham1 = styled.div`
  width: 25px;
  height: 5px;
  background-color: white;
  margin: 2px 0;
  transition-duration: 1s;
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
  transform: ${(props) =>
    props.isclicked ? "" : "translateY(10px) rotate(45deg)"};
`;

const Ham2 = styled.div`
  width: 25px;
  height: 5px;
  background-color: ${(props) => (props.isclicked ? "white" : "transparent")};
  transition-duration: 1s;
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
  margin: 2px 0;
`;
const Ham3 = styled.div`
  width: 25px;
  height: 5px;
  background-color: white;
  margin: 2px 0;
  color: white;
  transition-duration: 1s;
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
  transform: ${(props) =>
    props.isclicked ? "" : "translateY(-8px) rotate(-45deg)"};
`;
