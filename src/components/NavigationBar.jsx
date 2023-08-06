import React from "react";
import { styled } from "styled-components";
import { UilSearch } from "@iconscout/react-unicons";
import "../index.css";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";

const Container = styled.div`
  height: 90px;
  background-color: #ffb703;
  @media only screen and (max-width: 768px) {
    height: 60px;
  }
  @media only screen and (max-width: 480px) {
    height: 50px;
  }
`;
const Wrapper = styled.div`
  padding: 10px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  align-horizontall: center;
  display: flex;
`;
const Center = styled.div`
  flex: 1;
  ${'' /* align-items: center; */}
  display: flex;
  justify-content: center;
  align-horizontall: center;
`;
const Right = styled.div`
  flex: 1;
  ${'' /* align-items: center; */}
  align-horizontall: center;
  display: flex;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 2px solid black;
  display: flex;
  align-items: center;
  margin-left: 30px;
  padding: 10px;
  border-radius: 30px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  font-family: FSAlbertArabic-Light;
  border: none;
  outline: none;
  background-color: transparent;
  color: black;
  font-size: 13px;
  width: 100%;
  padding: 0;
  display: flex;
  align-horizontall: center;
  justify-content: center;
  &::placeholder {
    color: black;
    opacity: 0.7;
    font-size: 16px;
  }
  &:focus {
    border: none;
    outline: none;
    background-color: transparent;
    color: black;
    font-size: 16px;
    width: 100%;
    &::placeholder {
      color: black;
      opacity: 0.5;
      font-size: 16px;
    }
  }
  &:focus ~ ${SearchContainer} {
    border: 1px solid black;
  }
  &:focus ~ ${SearchContainer} > ${UilSearch} {
    color: black;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-family: FSAlbertArabic-ExtraBold;
  ${'' /* font-weight: bold; */}
`;

const MenuItems = styled.div`
  color: #023047;
  font-family: "FSAlbertArabic-Bold";
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    color: #fff;
    transition: 0.2s;
    font-weight: bold;
    font-size: 16px;
  }
`;

export default function NavigationBar() {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language style = {{marginBottom: 20 }} >EN</Language>
            <SearchContainer>
              <Input placeholder="search items" type="text" name="search" />
              <UilSearch color="black" size={20} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>LOGO.</Logo>
          </Center>
          <Right>
            <MenuItems >Register</MenuItems>
            <MenuItems>Sign In</MenuItems>
            <MenuItems>
              <UilShoppingCartAlt size={30}  />
            </MenuItems>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}
