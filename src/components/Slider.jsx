
import styled from "styled-components"

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"

const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #A0C1B8;
  color : white;
  position: relative;
`

const Arrow = styled.div`
 height: 50px;
 width: 50px;
 display:flex;
 align-items: center;
 justify-content: center;
 background-color: ghostwhite;
 color: red;
 border-radius: 50%;
 position: absolute; 
 left: ${props => props.direction === "left" && "10px"};
 right: ${props => props.direction === "right" && "25px"};
 cursor: pointer;
 opacity: 0.5;  
`

const Wrapper = styled.div`
  height: 90%;
  
`

const Slide = styled.div`
  height: 100vh;
  width: 100vh;
  display: flex;

  
`

const ImageContainer = styled.div`
  height: 80%;
  width: 80%;
  flex: 1;
  align-items: center;

`

const Image = styled.img`

  width: 80vw;
  max-height: inherit;
  align-items: center;
  margin-left: 25%;
  object-fit: cover;
  border-radius: 1.5%;
  
`

const InfoContainer = styled.div`
  
  background-color: papayawhip;
  height: 30vh;
  margin-left: -360px;
  margin-top: 45vh;
  width: 25vh;
  color: purple;
  border-radius: 2.5%;
  opacity: .75;
  width: inherit;
  
`

const Title = styled.h1`
  
`

const Description = styled.p`
  
`

const Button = styled.button`
  
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction= "left">
                <ArrowLeftOutlined/>
                </Arrow>
                <Wrapper>
                    <Slide>
                  <ImageContainer>
                      <Image src= "https://damassets.autodesk.net/content/dam/autodesk/www/solutions/cad-software/what-is-cad-software-thumb-1006x484.jpg"/>
                  </ImageContainer>
                  <InfoContainer>
                      <Title>Eco House Design</Title>
                      <Description>Maximize efficiency and luxury with this design</Description>
                      <Button>Get Design</Button>
                  </InfoContainer>
                  </Slide>
                </Wrapper>
                <Arrow direction= "right">
                <ArrowRightOutlined/>
                </Arrow>
        </Container>

    )
}

export default Slider
