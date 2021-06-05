import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Header({ isclicked, setIsclicked }) {
  return (
    <Ham>
      {" "}
      <Name>Kulbir Singh</Name>
      <TopMenu>
        <SubHeader>
          <div>
            <HeaderLink>Projects</HeaderLink>
          </div>
          <div>
            <HeaderLink to="#about">About</HeaderLink>
          </div>
          <div>
            <HeaderLink to="#contact">Contact</HeaderLink>
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

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  :focus {
    padding-bottom: 10px;
    border-bottom: 2px solid red;
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

const Name = styled.div`
  border: none;
  padding-left: 20px;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 1.5em;
  padding-right: 5%;

  width: 50%;
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
  padding: 10px;
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
  transition-duration: 1s;
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
  transform: ${(props) =>
    props.isclicked ? "" : "translateY(-8px) rotate(-45deg)"};
`;
