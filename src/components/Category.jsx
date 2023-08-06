import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  flex: 1;
  margin: 6px;
  height: 90vh;
  position: relative;
  border-radius: 20px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: rgb(0, 29, 61, 0.6);
`;

const Title = styled.h1`
  color: white;
  font-family: FSAlbertArabic-ExtraBold;
`;

const Button = styled.button`
  font-family: FSAlbertArabic-ExtraBold;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: #219ebc;
  color: white;
  padding: 10px;
  margin: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  transition: all 0.2s ease;
  &:hover {
    background-color: #fb8500;
    color: white;
  }
  &:focus {
    outline: none;
    border: none;
  }
  &:active {
    background-color: #fb8500;
    transform: scale(0.98);
  }
`;

export default function Category(props) {
  return (
    <Container>
        <Image src={props.image} />
        <Info>
            <Title>{props.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  );
}
