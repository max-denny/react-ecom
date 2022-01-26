
import styled from "styled-components"

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"

const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 85vh;
  display: flex;
  background-color: #B9D2D2;
  color : white;
  position: relative;
  opacity: 0.95;
`

const Arrow = styled.div`
 height: 70px;
 width: 70px;
 display:flex;
 align-items: center;
 justify-content: center;
 background-color: ghostwhite;
 color: darkorchid;
 border-radius: 50%;
 position: absolute; 
 left: ${props => props.direction === "left" && "10px"};
 right: ${props => props.direction === "right" && "45px"};
 cursor: pointer;
 opacity: 0.5;  
`

const Wrapper = styled.div`
  height: 90%;
  
`

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;

  
`

const ImageContainer = styled.div`
  height: 80%;
  width: 80%;
  flex: 1;
  align-items: center;
  padding: 10px;

`

const Image = styled.img`

  width: 80vw;
  height: 110%;
  align-items: center;
  justify-content: center;
  margin-left: 9%;
  object-fit: cover;
  border-radius: 1.5%;
  margin-top: -6%;
  
`

const InfoContainer = styled.div`
  
     flex: 1;
     left: 20px;
     margin-left: -1000px;
//   background-color: aliceblue;
//   height: 25vh;
//   margin-left: -1000px;
//   margin-top: 40vh;
//   width: 33vw;
  color: smokewhite;
  -webkit-text-stroke: 1.0px black;
  font-weight: bold;
  font-size: 22px;
//   border-radius: 2.5%;
  opacity: 2;
//   width: inherit;
  
`

const Title = styled.h1`
  margin-left: 10px;
  
`

const Description = styled.p`
  margin-left: 10px;
  
`
const Button = styled.button`
  margin-left: 10px;
  padding: 10px 10px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  
`

const Slider = () => {
    return (
       
        <Container>
            <Arrow direction= "left">
                <ArrowLeftOutlined fontSize="large" />
                </Arrow>
                <Wrapper>
                    <Slide>
                  <ImageContainer>
                      <Image src= "https://pngimg.com/uploads/house/house_PNG68.png"/>
                  </ImageContainer>
                  <InfoContainer>
                      <Title>Eco House Design</Title>
                      <Description>Maximize efficiency and luxury with this design</Description>
                      <Button>Get Design</Button>
                  </InfoContainer>
                  </Slide>  
                </Wrapper>
                <Arrow direction= "right">
                <ArrowRightOutlined fontSize="large"/>
                </Arrow>
        </Container>

    )
}

export default Slider
