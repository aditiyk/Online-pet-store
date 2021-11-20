import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";

import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #e3dac9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ backgroundColor: "#fff5ee" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  font-family: "Yuji Syuku", serif;
  letter-spacing: 1px;
  color: #ba8759;
  ${mobile({ fontSize: "30px" })}
`;
const Description = styled.div`
  font-family: "Slabo 27px", serif;
  font-size: 17px;
  color: black;
  margin-bottom: 15px;
  ${mobile({ textAlign: "center", fontSize: "12px" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid #800000;
  box-shadow: 0px 0px 4px white;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #fdf5e6;
  color: #800000;
  &:hover {
    color: #fdf5e6;
    background-color: #800000;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
