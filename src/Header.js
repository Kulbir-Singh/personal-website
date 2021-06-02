import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

export default function Header({ isclicked, setIsclicked }) {
  return (
    <Ham>
      {" "}
      <Name>Kulbir Singh</Name>
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

const HeaderLink = styled.a`
  color: white;
  text-decoration: none;
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 95%;
  align-items: flex-end;
  padding-left: 65%;
  div:nth-child(n) {
    cursor: pointer;
  }
`;

const TopMenu = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;
const Name = styled.div`
  border: none;
  mix-blend-mode: difference;
  color: white;
  background-color: black;
  cursor: pointer;
  font-size: 1.5rem;
  padding-right: 5%;
  width: 150px;
  @media (max-width: 800px) {
    margin-right: 55%;
    margin-left: 20px;
  }
`;

const HamDiv = styled.div`
  display: none;
  flex-direction: column;
  padding-right: 10px;
  cursor: pointer;
  @media (max-width: 800px) {
    display: flex;
  }
`;

const Ham = styled.div`
  margin: 0 20px;
  position: fixed;
  top: -2%;
  padding-top: 30px;
  right: -3%;
  width: 100%;
  display: flex;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  transition-duration: 1s;
  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
    right: -5.5%;
    top: -2%;
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
  transition-duration: 1s;
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
  transform: ${(props) =>
    props.isclicked ? "" : "translateY(-8px) rotate(-45deg)"};
`;
