import React from "react";
import {
  ShoppingCartTwoTone,
  FavoriteRounded,
  SearchRounded,
} from "@material-ui/icons";

import styled from "styled-components";
import { mobile } from "../responsive";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(253, 245, 230, 0.3);
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 15px;
  min-width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdf5e6;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  ${mobile({ padding: "5px", margin: "5px", minWidth: "200px" })}
`;

const Background = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  color: #800000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f5deb3;
    transform: scale(1.1);
  }
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Background />
      <Image src={item.img} />
      <Info>
        <Icon>
          <SearchRounded />
        </Icon>
        <Icon>
          <FavoriteRounded />
        </Icon>
        <Icon>
          <ShoppingCartTwoTone />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
