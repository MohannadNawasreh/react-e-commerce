import React from 'react'
import { styled } from 'styled-components'
import NavigationBar from '../components/NavigationBar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div`

`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        gap: 20px;
        flex-direction: column;
    }

`;

const Filter = styled.div`
    margin: 20px;
`;

const Title = styled.h1`

`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
`;

const Select = styled.select`

    padding: 10px;
    margin-right: 20px;
    border-radius: 10px;
    border: 1px solid #ccc;
    outline: none;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        color: #000;
        transition: all 0.3s ease;
        }
`;

const Option = styled.option`
    padding: 30px;
    color: #000;
    transition: all 0.3s ease;
    &:hover {
        color: #000;
        transition: all 0.3s ease;
        }
`

export default function ProductList() {
  return (
    <Container>
      <NavigationBar />
      <Title>Laptops</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products: </FilterText>
          <Select>
            <Option disabled selected> Operating System</Option>
            <Option>Android</Option>
            <Option>IOS</Option>
            <Option>symbian</Option>
          </Select>
          <Select>
            <Option disabled selected> Company</Option>
            <Option>Smasung</Option>
            <Option>Realme</Option>
            <Option>Oneplus</Option>
            <Option>Nothing</Option>
            <Option>Google</Option>
            <Option>Apple</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products: </FilterText>
          <Select>
            <Option disabled selected>
              {" "}
              select an option{" "}
            </Option>
            <Option>price: high to low</Option>
            <Option>price: low to high</Option>
            <Option>most recent</Option>
            <Option>most viewed</Option>
            <Option>best sellers</Option>
            <Option>top rated</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}
