import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  Room,
  LocalPhoneTwoTone,
  MailOutline,
  PaymentTwoTone,
} from "@material-ui/icons";

import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #800000;
  padding: 90px;
  ${mobile({ padding: "5px", flexDirection: "column" })}
`;
const Logo = styled.h1`
  color: white;
  font-family: "Yuji Syuku", serif;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-family: "Slabo 27px", serif;
  color: white;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  font-family: "Slabo 27px", serif;
  color: white;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  font-family: "Slabo 27px", serif;
  color: white;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-family: "Slabo 27px", serif;
  color: white;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PetCo</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="fdf5e6">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="fdf5e6">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="fdf5e6">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="fdf5e6">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Dogs</ListItem>
          <ListItem>Cats</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 102 Pet-Lane , West Cat
          Kingdom 00998
        </ContactItem>
        <ContactItem>
          <LocalPhoneTwoTone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@jkdyd.dev
        </ContactItem>
        <ContactItem>
          <PaymentTwoTone style={{ marginRight: "10px" }} /> Payment
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
