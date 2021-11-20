import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  margin: 20px;
  padding: 30px;
  border: 2px solid #faf0e6;
  font-family: "Slabo 27px", serif;
  letter-spacing: 3px;
  color: #987654;
  box-shadow: 0px 0px 6px #f5deb3;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #faf0e6;
  cursor: pointer;
  border: 1px solid #836953;
  box-shadow: 0px 0px 4px #836953;
  font-family: "Slabo 27px", serif;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "faf0e6"};
  color: ${(props) => props.type === "filled" && "white"};
  &:hover {
    background-color: black;
    border: 1px solid white;
    box-shadow: 0px 0px 4px black;
    color: white;
  }
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  color: #836953;
`;

const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;

  border: 0.5px solid #dcdcdc;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Image = styled.img`
  width: 250px;
`;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 23px;
  padding: 10px 10px;
  margin: 5px;
  background-color: #f5deb3;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 400;
`;

const Hr = styled.div`
  background-color: #d3d3d3;
  border: none;
  height: 1px;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  font-size: 20px;
  background-color: #800000;
  cursor: pointer;
  border: 1px solid white;
  font-family: "Slabo 27px", serif;
  color: white;
  padding: 15px;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(1)</TopText>
            <TopText>Your Wishlist(1)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECK OUT NOW!</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://cdn.shopify.com/s/files/1/2408/6395/products/product-image-1092369636_2048x.jpg?v=1571321868" />
                <Details>
                  <ProductName>
                    <b>MeowMeow Cat Pink Sweater- Medium Thickness</b>
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 7864735676
                  </ProductId>
                  <ProductColor color="pink" />
                  <ProductSize>
                    <b>Size:</b> XS
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rs 699</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://m.media-amazon.com/images/I/81w8WG37aQL._AC_SX466_.jpg" />
                <Details>
                  <ProductName>
                    <b>PetCo Adjustable Puppy Collar</b>
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="purple" />
                  <ProductSize>
                    <b>Size:</b> S
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rs 210</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SUBTOTAL</SummaryItemText>
              <SummaryItemPrice> Rs 909 </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>ESTIMATED SHIPPING</SummaryItemText>
              <SummaryItemPrice>Rs 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs 859</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
