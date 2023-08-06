
import styled from 'styled-components'
import { UilMessage } from "@iconscout/react-unicons";

const Container = styled.div`
  height: 50vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(2, 48, 71);
`;

const Title = styled.h1`
  color: #fff;
  font-size: 70px;
  margin-bottom: -20px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "FSAlbertArabic-Bold";
`;
const Desc = styled.div`
  color: #fff;
  font-family: "FSAlbertArabic-Light";
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${'' /* border: 1px solid #fff; */}
    ${'' /* border-radius: 10px; */}
    margin-bottom: 20px;
`;

const Input = styled.input`
    
    border: none;
    width: 100%;
    height: 100%;
    background-color: #fff;
    &:focus{
        outline: none;
        border: none;
        background-color: #fff;
    }
    padding: 0 20px;
`;

const Button = styled.button`
  border: none;
  background-color: rgba(251, 133, 0);
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${"" /* border-radius: 10px; */}
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    background-color: rgba(255, 195, 0);
    color: #000;
    transition: all 0.1s ease;
  }
`;




export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <UilMessage size={30} color="#fff"/>
        </Button>
      </InputContainer>
    </Container>
  );
}
