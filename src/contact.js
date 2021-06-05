import styled from "styled-components";
import LinkedIn from "./resource/linkedin.png";
import github from "./resource/github.svg";

export default function Contact() {
  return (
    <Wrapper>
      <PersonalInfo>
        <div>
          Got any questions or inquiries feel free to reach out to me
          <Line></Line>
          <div>
            <Tags>Email</Tags> kulbir2406@gmail.com
            <Line></Line>
            <Tags>LinkedIn</Tags>
            <A
              href="https://www.linkedin.com/in/-kulbir-singh/"
              target="_blank"
            >
              linkedin.com/in/-kulbir-singh{" "}
            </A>
            <Logo>
              <a
                href="https://www.linkedin.com/in/-kulbir-singh/"
                target="_blank"
              >
                <LogoImg src={LinkedIn} />
              </a>

              <a href="https://github.com/Kulbir-Singh" target="_blank">
                <LogoImg src={github} />
              </a>
            </Logo>
            <Line></Line>
            <Tags>GitHub</Tags>
            <A href="https://github.com/Kulbir-Singh" target="_blank">
              github.com/Kulbir-Singh
            </A>
            <Line></Line>
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
  color: black;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Tags = styled.div`
  color: #15a3e6;
  font-weight: bold;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Line = styled.div`
  border: 1px solid black;
  width: 100%;
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
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
    height: 60%;
    padding-bottom: 5%;
  }
`;

const Form = styled.form`
  border: 2px solid #00000010;
  background-color: white;
  color: black;
  box-shadow: 0px 10px 20px lightsteelblue;
  border-radius: 2px;
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
      font-size: 12px;
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
  background-color: #15a3e6;
  font-weight: bold;
  color: white;
  border-radius: 2px;
`;

const PersonalInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 0 5%;
  font-weight: bold;
  div:nth-child(n) {
    width: 100%;
    margin: 20px 0;
  }
  @media (max-width: 800px) {
    width: 90%;
    font-size: 15px;
    padding: 0 5%;
    padding-top: 15%;
    div:nth-child(n) {
      width: 100%;
      margin: 10px 0;
    }
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
  /* background-color: #f9f9fb; */
  color: black;
  height: 100vh;
  font-size: 18px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
