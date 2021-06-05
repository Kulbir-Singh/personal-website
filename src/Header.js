import styled from "styled-components";

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
  color: black;
  text-decoration: none;
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
  color: black;
  cursor: pointer;
  font-size: 1.5em;
  padding-right: 5%;
  font-weight: bold;
  width: 50%;
`;

const HamDiv = styled.div`
  display: none;
  flex-direction: column;
  padding-right: 10px;
  cursor: pointer;
  width: 50%;
  height: 100%;
  align-items: flex-end;
  @media (max-width: 800px) {
    display: flex;
  }
`;

const Ham = styled.div`
  position: fixed;
  top: -2%;
  padding-top: 30px;
  width: 100%;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  transition-duration: 1s;
  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
    top: -2%;
  }
  /* display: none; */
  z-index: 10;
`;

const Ham1 = styled.div`
  width: 25px;
  height: 5px;
  background-color: black;
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
  background-color: ${(props) => (props.isclicked ? "black" : "transparent")};
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
  background-color: black;
  margin: 2px 0;
  transition-duration: 1s;
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
  transform: ${(props) =>
    props.isclicked ? "" : "translateY(-8px) rotate(-45deg)"};
`;
