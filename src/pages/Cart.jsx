import React from "react";
import { styled } from "styled-components";
import NavigationBar from "../components/NavigationBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { UilPlusCircle } from "@iconscout/react-unicons";
import { UilMinusCircle } from "@iconscout/react-unicons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #000;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #000;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;

const TopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.type === "filled" ? "orange" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
  border: ${(props) => (props.type === "filled" ? "none" : "2px solid black")};
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  font-weight: 600;

  border-radius: 10px;
  transition: all 0.1s ease;
  &:hover {
    background-color: #e9f5f5;
    color: black;
  }
`;

const TopTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: #000;
    text-decoration: none;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
`;

const Info = styled.div`
  flex: 8;
`;


const Product = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 20px 0px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const PriceDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
  @media (max-width: 400px) {
    @media (max-width: 400px) {
    align-items: flex-start;
  }
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: 100%;
  }
  border-radius: 10px;
  margin-bottom: 20px;
  object-fit: cover;
  object-position: center;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
`;

const ProductName = styled.span``;

const ProductId = styled.span`

`;

const ProductAmount = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
const AmountButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 40px;
  background-color: rgba(33, 158, 188);
  color: White;
  font-size: 18px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #fff;
    color: rgba(0, 64, 128);
    border: 1px solid rgba(0, 64, 128);
  }
`;
const AmountContainer = styled.div`
  margin: 20px 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 800;
  color: #f9b915;
  width: 50%;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
`;

const Amount = styled.span`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  color: #f9b915;
  width: 50px;
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #f9b915;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const ProductPrice = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    color: #f9b915;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        align-items: flex-start;
    }
    @media (max-width: 400px) {
        align-items: flex-start;
    }
`;

const Hr = styled.hr`
    width: 50%;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #eee;
`;
const Summary = styled.div`
  border: 0.5px solid lightgray;
  padding: 20px;
  margin: 20px;
  @media (max-width: 768px) {
    height: 50vh;
  }
  height: 50vh;
`;
const SummaryTitle = styled.h1`

`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;
const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        font-size: 18px;
    font-weight: 700;
    color: #f9b915;
    }
    @media (max-width: 400px) {
        font-size: 18px;
    font-weight: 700;
    color: #f9b915;
    }
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "20px"};
`;


export default function Cart() {
  return (
    <Container>
      <NavigationBar />

      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Subtotal (2) items</TopText>
            <TopText>Your Wishlist (0) items</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image
                  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
                <Details>
                  <ProductName>
                    <b>Product:</b> Apple MacBook Pro 13-inch (2017) (2nd
                    Generation)
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 231388978789
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmount>
                  {" "}
                  <AmountContainer>
                    <AmountButton Style={{ marginRight: "20px" }}>
                      {<UilMinusCircle />}
                    </AmountButton>
                    <Amount>1</Amount>
                    <AmountButton>{<UilPlusCircle />}</AmountButton>
                  </AmountContainer>
                </ProductAmount>
                <ProductPrice>$1,000.00</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
        </Bottom>
        <Hr />
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image
                  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
                <Details>
                  <ProductName>
                    <b>Product:</b> Apple MacBook Pro 13-inch (2017) (2nd
                    Generation)
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 231388978789
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmount>
                  {" "}
                  <AmountContainer>
                    <AmountButton Style={{ marginRight: "20px" }}>
                      {<UilMinusCircle />}
                    </AmountButton>
                    <Amount>1</Amount>
                    <AmountButton>{<UilPlusCircle />}</AmountButton>
                  </AmountContainer>
                </ProductAmount>
                <ProductPrice>$1,000.00</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
        </Bottom>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal (2) items: </SummaryItemText>
            <SummaryItemPrice>$1,000.00</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping: </SummaryItemText>
            <SummaryItemPrice>$30.5</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Discount: </SummaryItemText>
            <SummaryItemPrice>$-30.25</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>total: </SummaryItemText>
            <SummaryItemPrice>{1000 + 30.5 - 30.25}</SummaryItemPrice>
          </SummaryItem>
          <TopButton type="filled" Style={{ width: "100%" }}>CONTINUE SHOPPING</TopButton>
        </Summary>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
}
