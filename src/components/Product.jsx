import React from 'react'
import { styled } from 'styled-components'
import { UilBookmarkFull } from "@iconscout/react-unicons";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 20rem;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 2px 5px 0px rgba(0, 64, 128, 0.2);
  margin: 1.5rem;
  background-color: #f5fbfd;
  &:hover {
    background-color: #ebeff2;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const ImageContainer = styled.div`
    overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f5fbfd;
  &:hover {
    background-color: #ebeff2;
  }
`;

const Info = styled.div`
  margin: 0.2rem 0;
  font-size: 1rem;
`;

const Title = styled.h3`
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(2, 48, 71);
  font-family: "FSAlbertArabic-ExtraBold"
`;

const Price = styled.h5`
  font-weight: bold;
  color: rgba(33, 158, 188);
  font-family: "FSAlbertArabic-ExtraBold";
`;
const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  border: none;
  background-color: white;
  padding: 12px 10px 10px;
  box-shadow: 2px 2px 5px 0px rgba(0, 64, 128, 0.1);
  &:hover {
    background-color: rgba(251, 133, 0);
  }
`;


export default function Product(props) {
  return (
    <>
      <Container key={props.id}>
        <ImageContainer>
          <Image src={props.image} alt="" />
        </ImageContainer>
        <Info>
          <Title>{props.title}</Title>
          <Price>{props.price}</Price>
        </Info>

        <Icon>
          <UilBookmarkFull size={20} color="rgba(2, 48, 71)" />
        </Icon>
      </Container>
    </>
  );
}
