import React from "react";
import { styled } from "styled-components";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilWhatsapp } from "@iconscout/react-unicons";
import { UilPhoneAlt } from "@iconscout/react-unicons";
import { UilMailbox } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";

const Container = styled.div`
  display: flex;
  height: 30vh;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  flex-direction: row;
  padding: 20px;
  background-color: rgba(33, 158, 188);
`;

const Left = styled.div`
  flex: 1;
  margin: 20px;
`;

const Center = styled.div`
  flex: 1;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Right = styled.div`
  flex: 1;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.div`
  font-size: 40px;
  font-weight: 800;
  font-family: "FSAlbertArabic-ExtraBold";
  color: #fff;
`;

const Description = styled.div`
  font-size: 14px;
  padding-bottom: 20px;
  font-weight: 500;
  font-family: "FSAlbertArabic-Regular";
  color: #fff;
`;

const SocialMedia = styled.div`
  display: flex;
`;

const Icon = styled.div`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: rgba(0, 53, 102);
  transition: all 0.2s ease;
  &:hover {
    color: #ffd60a;
    transform: scale(1.2);
    transition: all 0.1s ease;
    border-radius: 50%;
  }
`;

const Title = styled.div`
  margin-bottom: 30px;
  font-weight: 800;
  font-family: "FSAlbertArabic-ExtraBold";
  color: #fff;
  font-size: 20px;
`;

const RightTitle = styled.div`
  margin-bottom: 30px;
  margin-top: -5.5rem;
  font-weight: 800;
  font-family: "FSAlbertArabic-ExtraBold";
  color: #fff;
  font-size: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  align-items: flex-start;
`;

const ListItem = styled.li`
  width: 39%;
  margin-bottom: 8px;
  font-family: "FSAlbertArabic-Regular";
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    color: #ffd60a;
    transform: scale(1.05);
    transition: all 0.1s ease;
  }
  font-size: 18px;
`;

const CListItem = styled.li`
  width: 40%;
  font-family: "FSAlbertArabic-Regular";
  cursor: pointer;
  margin-bottom: 8px;
  margin-right: 20px;
  margin-top: 8px;
  transition: all 0.2s ease;
  &:hover {
    color: #ffd60a;
    transform: scale(1.05);
    transition: all 0.1s ease;
  }
  font-size: 18px;
`;

const ContactUs = styled.div`
  margin-right: 20px;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>LOGO</Logo>
        <Description>
          This website is made by Mohannad Nawasreh, a fresh graduate Software
          engineer from Jordan university of science and technology the
          Front-end is made using react, redux, redux-thunk, redux-persist,
          react-router-dom, axios, styled-components and more. the Back-end is
          made using Node.js, Express, and MongoDB.
        </Description>
        <SocialMedia>
          <Icon>
            <UilFacebook color="#fff" size={30} />
          </Icon>
          <Icon>
            <UilInstagram color="#fff" size={30} />
          </Icon>
          <Icon>
            <UilLinkedin color="#fff" size={30} />
          </Icon>
          <Icon>
            <UilTwitter color="#fff" size={30} />
          </Icon>
          <Icon>
            <UilWhatsapp color="#fff" size={30} />
          </Icon>
        </SocialMedia>
      </Left>

      <Center>
        <Title>useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Electronics</ListItem>
          <ListItem>Books</ListItem>
          <ListItem>Home furniture</ListItem>
          <ListItem>Home Electronics</ListItem>
        </List>
      </Center>

      <Right>
        <RightTitle>Contact me</RightTitle>
        <List>
          <CListItem>
            <UilMailbox style={{ marginRight: 10 }} color="#fff" size={20} />
            mohannad4x@gmail.com
          </CListItem>
          <CListItem>
            <UilPhoneAlt style={{ marginRight: 10 }} color="#fff" size={20} />
            0795715785
          </CListItem>
          <CListItem>
            <UilMapMarker style={{ marginRight: 10 }} color="#fff" size={20} />
            Amman, Jordan
          </CListItem>
        </List>
      </Right>
    </Container>
  );
}
