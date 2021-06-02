import styled from "styled-components";
import Homepage from "./Homepage";
import Projects from "./Projects";

function App() {
  return (
    <Wrapper>
      <Container>
        <section id="home">
          <Homepage />
        </section>{" "}
        <section id="project">
          <Projects />
        </section>
        <section id="about">
          <Projects />
        </section>
        <section id="contact">
          <Projects />
        </section>
      </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  section:nth-child(n) {
    scroll-snap-align: center;
  }
`;

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  height: 100vh;

  overflow: hidden;
`;

export default App;
