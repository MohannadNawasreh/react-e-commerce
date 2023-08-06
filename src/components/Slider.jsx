import React from "react";
import { styled } from "styled-components";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.position === "left" && "10px"};
  right: ${(props) => props.position === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  &:hover {
    background-color: #ffb703;
    transition: 0.2s;
  }
  &:focus {
    background-color: #ffb703;
    transition: 0.2s;
  }
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.3s ease;
  transform: translateX(${props => props.slideIndex  * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  max-width: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
  ${'' /* width: 100%; */}
`;

const InfoContainer = styled.div`
  flex: 1;

    padding: 50px; 
  ${'' /* display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center; */}
`;

const Title = styled.h1`
  font-size: 60px;
  line-height: 100%;
  color: #003566;
  font-family: FSAlbertArabic-ExtraBold;
  margin-bottom: 20px;
  ${'' /* text-align: center; */}
`;
const Description = styled.p`
    font-size: 25px;
    font-family: FSAlbertArabic-Thin;
    margin-bottom: 20px;
    ${'' /* text-align: center; */}
`;

const Button = styled.button`
  padding: 10px;
  font-family: "FSAlbertArabic-Bold";
  font-size: 20px;
  background-color: #023047;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: #fb8500;
    transition: 0.2s;
  }
  &:focus {
    background-color: #fb8500;
    transition: 0.2s;
  }
`;


export default function Slider() {
    const [slideIndex, setSlideIndex] = React.useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Container>
        <Arrow position="left" onClick={() => handleClick("left")}>
          <UilArrowLeft size={30} color="#023047" />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide key={item.id}>
              <ImgContainer>
                <Image src={item.img} alt="" />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.describtion}</Description>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow position="right" onClick={() => handleClick("right")}>
          <UilArrowRight size={30} color="#023047" />
        </Arrow>
      </Container>
    </>
  );
}
