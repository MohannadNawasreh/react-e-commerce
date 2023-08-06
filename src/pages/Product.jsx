import React from 'react'
import { styled } from 'styled-components'
import NavigationBar from '../components/NavigationBar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { UilPlusCircle } from "@iconscout/react-unicons";
import { UilMinusCircle } from "@iconscout/react-unicons";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 1;
    img {
        width: 100%;
    }
    width: 40%;
    height: auto;
    padding: 20px;
    border-radius: 10px;
    margin-right: 20px;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 20px 50px;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Title = styled.h1`
    font-weight: 800;
`;

const Description = styled.p`
    font-size: 20px;
    font-weight: 300;
    margin: 40px 0px;
`;

const Price = styled.span`
    font-size: 40px;
    font-weight: 800;
    color: #f9b915;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 50%;
    margin-left: 20px;
    margin-right: 20px;
    align-items: center;
    font-size: 20px;
`;

const Select = styled.select`

    padding: 10px;
    margin-right: 20px;
    border-radius: 10px;
    background-color: white;
    color: black;
    font-size: 20px;
    font-weight: 800;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        background-color: #fff;
        background-color: #fff;
        color: #f9b915;
    }
`;

const Option = styled.option`

`;

const Button = styled.button`
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
`;

const Amount = styled.span`
display: flex;
justify-content: center;
  font-size: 20px;
  font-weight: 800;
  color: #f9b915;
  width: 30px;
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



const StorageOptions = styled.button`
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: white;
    color: black;
    font-size: 20px;
    font-weight: 800;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        background-color: #fff;
        background-color: #fff;
        color: #f9b915;
        border: 1px solid #f9b915;
        }
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 50%;
  margin-left: 20px;
  margin-right: 20px;
  width: 50%;
`

export default function Product() {
  return (
    <Container>
      <NavigationBar />
      <Wrapper>
        <ImageContainer>
          <Image
            src="https://m.media-amazon.com/images/I/71RxOftVoQL._AC_SL1500_.jpg"
            alt=""
          />
        </ImageContainer>
        <InfoContainer>
          <Title>
            <span>Samsung Galaxy S20 FE</span>
          </Title>
          <Description>
            <span>
              Samsung Galaxy S20 FE is a smartphone with a 12.5-inch (7.0 cm)
              display and a resolution of 1080 x 2340 pixels.
            </span>
          </Description>
          <Price>
            <span>$1,199.99</span>
          </Price>
          <FilterContainer>
            <span>Filter</span>
            <Select>
              <Option>None</Option>
              <Option>Black</Option>
              <Option>White</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
            </Select>

            <StorageOptions>64GB</StorageOptions>
            <StorageOptions>256GB</StorageOptions>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Button Style={{marginRight: "20px"}}>{<UilMinusCircle />}</Button>
              <Amount>1</Amount>
              <Button>{<UilPlusCircle />}</Button>
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
