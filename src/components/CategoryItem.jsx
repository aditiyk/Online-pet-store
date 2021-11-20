import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  ${mobile({ fontSize: "20px" })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  transition: all 1s ease-in-out;
  &:hover {
    border: 2px solid #ba8759;
    box-shadow: 0px 0px 4px white;
    transform: scale(1.1);
  }
  ${mobile({ padding: "7px", fontWeight: "bold" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />

      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
