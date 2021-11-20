import React from "react";
import styled from "styled-components";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import {
  RemoveCircleOutlineRounded,
  AddCircleOutlineRounded,
} from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: bold;
  font-family: "Slabo 27px", serif;
  word-spacing: 4px;
  letter-spacing: 1px;
`;
const Desc = styled.p`
  font-family: "Slabo 27px", serif;
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 40px;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 20px;
  border: 2px solid white;
  background-color: black;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: white;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImageContainer>
          <Image src="https://i.pinimg.com/originals/00/f6/bf/00f6bf245ddd5a09722ea624b9a20916.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Christmas Cat Bandana(Special Edition)</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            adipisci natus enim voluptatibus nesciunt inventore voluptas maiores
            suscipit. Laudantium enim facilis tempora ad ea, omnis ex iure
            voluptatem saepe optio.
          </Desc>
          <Price>Rs 499</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="maroon"></FilterColor>
              <FilterColor color="green"></FilterColor>
              <FilterColor color="navy"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveCircleOutlineRounded />
              <Amount>1</Amount>
              <AddCircleOutlineRounded />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
