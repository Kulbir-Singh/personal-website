import styled from "styled-components";
import Contact from "./contact";
import Homepage from "./Homepage";
import Projects from "./Projects";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./about";
import AboutMe from "./AboutMe";

function App() {
  return (
    <Wrapper>
      <Router>
        <Container>
          <section id="home">
            <Homepage />
          </section>{" "}
          <section id="project">
            <Projects />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Container>
      </Router>
    </Wrapper>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  section:nth-child(n) {
    scroll-snap-align: center;
  }
`;

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  overflow: hidden;
  /* background: #f5f3ef;
  
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    25% {
      background-position: 50% 25%;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 50% 25%;
    }
    100% {
      background-position: 0% 50%;
    }
  } */
`;

export default App;
