import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

export default function Sidebar({ isclicked, setIsclicked }) {
  return (
    <Wrapper isclicked={isclicked}>
      <div>
        <HeaderLink href="#project">Projects</HeaderLink>
      </div>
      <div>
        <HeaderLink href="#about">About me</HeaderLink>
      </div>
      <div>
        <HeaderLink href="#contact">Contact</HeaderLink>
      </div>
    </Wrapper>
  );
}

const HeaderLink = styled.a`
  color: black;
  position: relative;
  text-decoration: none;
  /* mix-blend-mode: difference; */
  position: relative;
  font-size: 20px;
  font-weight: lighter;
  z-index: 10;
  top: -15px;
`;

const Wrapper = styled.div`
  transform: ${(props) =>
    props.isclicked ? "translateX(300px)" : "translateX(0)"};
  position: fixed;
  transition-duration: 1s;
  top: 0;
  z-index: 5;
  right: 0%;
  padding-top: 20px;
  text-align: right;
  margin-right: 0px;
  height: 100%;
  display: none;
  width: 40%;
  background-color: white;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    color: black;
    div:nth-child(n) {
      margin: 50px 0;
      padding-top: 30px;
      height: 0;
    }
  }
`;
