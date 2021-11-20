import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";
const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  ${mobile({ margin: "15px", padding: "0px" })}
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
