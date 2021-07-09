import { useEffect } from "react";
import styled from "styled-components";
import Finance from "./resource/financelogin.PNG";
import Watch from "./resource/e-commerce-homepage.png";
import SocialNetwork from "./resource/signin.png";
import right from "./resource/right-arrow.png";
import left from "./resource/left-arrow.png";

export default function Projects() {
  useEffect(() => {
    const slider = document.querySelector(".gallery");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", (_) => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", (_) => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const SCROLL_SPEED = 3;
      const walk = (x - startX) * SCROLL_SPEED;
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <Wrapper>
      <Img src={right} />
      {/* <Img1 src={left} onClick={() => document.querySelector(".gallery")} /> */}
      <Ul className="gallery">
        <Project>
          <h1>Finance Network</h1>
          <div>
            <FinanceImg src={Finance} />
          </div>
          <Text>
            <strong>
              Description:
              <br /> <br />
            </strong>
            The website is built for users that want to learn or share their
            ideas related to the finance industry. With features such as being
            able to follow a user, to share and bookmark articles, you're able
            to create connections with others that share similar interest as
            yours.
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
            <br />
            React, Redux, Firebase, Node.js, Html, CSS, Mongodb
          </Text>
        </Project>
        <Project1>
          <h1>Social Network</h1>
          <div>
            <FinanceImg src={SocialNetwork} />
          </div>
          <Text>
            <strong>
              Description:
              <br /> <br />
            </strong>
            The website is built for users that want to learn or share their
            ideas related to the finance industry. With features such as being
            able to follow a user, to share and bookmark articles, you're able
            to create connections with others that share similar interest as
            yours.
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
            <br />
            React, Redux, Firebase, Node.js, Html, CSS, Mongodb
          </Text>
        </Project1>
        <Project2>
          <h1>E-Commerce</h1>
          <div>
            <FinanceImg src={Watch} />
          </div>
          <Text>
            <strong>
              Description:
              <br /> <br />
            </strong>
            The website is built for users that want to learn or share their
            ideas related to the finance industry. With features such as being
            able to follow a user, to share and bookmark articles, you're able
            to create connections with others that share similar interest as
            yours.
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
            <br />
            React, Redux, Firebase, Node.js, Html, CSS, Mongodb
          </Text>
        </Project2>
      </Ul>
    </Wrapper>
  );
}
const Img1 = styled.img`
  width: 50px;
  top: 50vh;
  position: relative;
  left: 5vw;
  transition-duration: 1s;
  opacity: 0.25;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 50px;
  position: relative;
  top: 50vh;
  left: 90vw;
  transition-duration: 1s;
  opacity: 1;
  :hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1.2);
  }
`;

const Div = styled.div``;

const SubProjects = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Project1 = styled.ol`
  border-radius: 20px;
  display: flex;
  transition-duration: 1s;
  overflow: hidden;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.81);
  justify-content: space-around;
  @media (max-width: 800px) {
    width: 95vw;
    height: 65%;
  }
`;

const Project2 = styled.ol`
  border-radius: 20px;
  display: flex;
  transition-duration: 1s;
  overflow: hidden;
  flex-direction: column;
  margin: 0 0;
  background-color: rgba(255, 255, 255, 0.81);

  justify-content: space-around;
  @media (max-width: 800px) {
    width: 95vw;
    height: 65%;
  }
`;

const Text = styled.div`
  width: 80%;
`;

const FinanceLink = styled.a`
  color: black;
`;

const FinanceImg = styled.img`
  width: 95%;
  height: 100%;
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

const Ul = styled.ul`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(10, 40vw);
  grid-template-rows: 1fr;
  grid-column-gap: 10rem;
  grid-row-gap: 1rem;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 80vh;
  scroll-snap-type: both mandatory;
  ::-webkit-scrollbar {
    height: 0px;
  }
  padding-left: 5vw;
  padding-right: 5vw;
  scroll-padding: 1rem;
`;

const Project = styled.ol`
  border-radius: 20px;
  display: flex;
  transition-duration: 1s;
  overflow: hidden;
  flex-direction: column;
  margin: 0 0;
  background-color: rgba(255, 255, 255, 0.81);
  justify-content: space-around;
  @media (max-width: 800px) {
    width: 95vw;
    height: 65%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  :active {
    cursor: grab;
  }
`;
