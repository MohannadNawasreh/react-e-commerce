import React from 'react'
import { styled } from 'styled-components'
import { popularProducts } from '../data';

import Product from './Product';

const Container = styled.div`
    width: 100vw;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 20px;
    margin-bottom: 20px; 
    background-color: white;
    overflow: hidden;
`;
const Heading = styled.h1`
    margin-left: 30px;
    overflow: hidden;
`;

export default function Products() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* <Heading>Popular Products</Heading> */}
      <Container>
        {popularProducts.map((item) => (
          <Product
            title={item.title}
            key={item.id}
            image={item.img}
            price={item.price}
          />
        ))}
      </Container>
    </div>
  );
}
