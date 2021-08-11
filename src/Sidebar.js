import styled from "styled-components";

export default function Sidebar({ isclicked, setIsclicked }) {
  return (
    <Wrapper isclicked={isclicked}>
      <div>
        <HeaderLink href="#project" onClick={() => setIsclicked(!isclicked)}>
          Projects
        </HeaderLink>
      </div>
      <div>
        <HeaderLink href="#about" onClick={() => setIsclicked(!isclicked)}>
          About me
        </HeaderLink>
      </div>
      <div>
        <HeaderLink href="#contact" onClick={() => setIsclicked(!isclicked)}>
          Contact
        </HeaderLink>
      </div>
    </Wrapper>
  );
}

const HeaderLink = styled.a`
  color: white;
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
    props.isclicked ? "translateX(1000px)" : "translateX(0)"};
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
    color: white;
    background: rgba(0, 0, 0, 0.92);
    div:nth-child(n) {
      margin: 50px 0;
      padding-top: 30px;
      height: 0;
    }
  }
`;
