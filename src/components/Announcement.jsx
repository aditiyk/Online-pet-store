import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50px;
  background-color: #ba8759;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }

  ${mobile({ height: "20px", fontSize: "9px" })}
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
