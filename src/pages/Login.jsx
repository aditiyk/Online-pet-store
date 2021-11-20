import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(253, 245, 230);
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1550159930-40066082a4fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80")
      right;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  border-radius: 2%;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  font-family: "Slabo 27px", serif;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px 10px 0px;
  padding: 10px;
  font-family: "Slabo 27px", serif;
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 10px;
  font-size: 15px;
  background-color: #836953;
  color: white;
  cursor: pointer;
  font-family: "Slabo 27px", serif;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const Link = styled.a`
  margin: 5px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>Forgot Password?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
