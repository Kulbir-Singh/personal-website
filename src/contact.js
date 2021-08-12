import styled from "styled-components";
import LinkedIn from "./resource/linkedin.png";
import github from "./resource/github.svg";
import cv from "./resource/curriculum-vitae.png";

export default function Contact() {
  return (
    <Wrapper>
      <PersonalInfo>
        <div>
          IF YOU HAVE ANY QUESTIONS FEEL FREE TO <H1>GET IN TOUCH</H1>
          <div>
            {/* <Tags>Email</Tags>
            <A href="https://github.com/Kulbir-Singh/portfolio/raw/main/Resume_KulbirSingh.pdf">
              Resume
            </A> */}
            <Tags>
              <A
                href="https://www.linkedin.com/in/-kulbir-singh/"
                target="_blank"
              >
                LinkedIn
              </A>
            </Tags>
            <Logo>
              <a
                href="https://www.linkedin.com/in/-kulbir-singh/"
                target="_blank"
              >
                <LogoImg src={LinkedIn} />
              </a>
              <a href="https://github.com/Kulbir-Singh/portfolio/raw/main/Resume_KulbirSingh.pdf">
                <LogoImg src={cv} />
              </a>
              <a href="https://github.com/Kulbir-Singh" target="_blank">
                <LogoImg src={github} />
              </a>
            </Logo>

            <Tags>
              <A href="https://github.com/Kulbir-Singh" target="_blank">
                GitHub
              </A>
            </Tags>
          </div>
        </div>
      </PersonalInfo>
      <FormContainer>
        <Form action="">
          <div>
            <label for="firstName">First Name</label>
            <Input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label for="lastName">last Name</label>
            <Input type="text" id="lastName" name="lastName" />
          </div>
          <div>
            <label for="email">Email</label>
            <Input type="email" id="email" name="email" />
          </div>
          <div>
            <label for="message">Message</label>
            <Textarea
              type="text"
              id="message"
              name="message"
              cols="30"
            ></Textarea>
          </div>
          <Button type="submit">Send</Button>
        </Form>
      </FormContainer>
    </Wrapper>
  );
}

const H1 = styled.h1`
  font-size: 50px;
  font-weight: bolder;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 35px;
  }
`;

const LogoImg = styled.img`
  height: 2em;
`;

const Logo = styled.div`
  display: none;
  width: 100%;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-evenly;
    align-items: space-around;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #ffc815;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Tags = styled.div`
  color: #000;
  font-weight: bold;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Line = styled.div`
  border: 1px solid black;
  margin-right: 50px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Input = styled.input`
  height: 20px;
  margin: 0 0 20px 0;
  font-size: 20px;
  border: none;
  border-bottom: 2px solid #00000010;
  :focus {
    outline: none;
  }
  @media (max-width: 800px) {
    font-size: 11px;
  }
`;

const FormContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 9.5vw;
  @media (max-width: 800px) {
    width: 100%;
    height: 60%;
    padding-bottom: 5%;
    align-items: center;
    margin-right: 0vw;
  }
`;

const Form = styled.form`
  border: 10px solid #ffd650;
  background-color: white;
  color: black;

  /* box-shadow: 0px 10px 20px lightsteelblue; */
  border-radius: 20px;
  overflow: hidden;
  width: 30vw;
  height: 50%;
  flex-direction: column;
  justify-content: center;
  padding: 6% 5%;
  div:nth-child(n) {
    display: flex;
    flex-direction: column;
    padding-bottom: 0px;
    font-size: 18px;
    font-weight: bold;
  }
  @media (max-width: 800px) {
    overflow: scroll;
    height: 100%;
    width: 75%;
    div:nth-child(n) {
      font-size: 1rem;
    }
  }
`;

const Button = styled.button`
  font-size: 18px;
  padding: 2px 10px;
  height: 10%;
  width: 25%;
  margin-top: 10px;
  min-width: 100px;
  display: block;
  border: 2px solid #00000010;
  background-color: #ffd650;
  font-weight: bold;
  color: black;
  border-radius: 10px;
`;

const PersonalInfo = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-left: 10%;
  font-weight: bold;
  div:nth-child(n) {
    width: 100%;
    margin: 20px 0;
  }
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    padding: 0 0%;
    padding-top: 15%;
    margin-left: 0%;
    margin-bottom: 0;
  }
`;

const Textarea = styled.textarea`
  font-size: 20px;
  border: none;
  border-bottom: 2px solid #00000010;
  outline: none;
  height: 20vh;
  @media (max-width: 800px) {
    height: 15vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  background-color: #ffeba7;
  background: repeating-linear-gradient(
    #ffeba7,
    #ffeba7 49.9%,
    #000 50.1%,
    #000 100%
  );
  color: black;
  height: 100vh;
  font-size: 18px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
