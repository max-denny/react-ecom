import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'


const Container = styled.div`
  height: 55px;
  margin-bottom: 35px;
  color: #DDDDDD;

`

const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #726A95;

`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  
`

const Logo = styled.h1`
  font-weight: bold;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  
  display: flex;
  align-items: center;
  margin-left: 30px;
  padding: 5px;
  
`

const Input = styled.input`
  
`

const Center = styled.div`
  flex: 1;
  text-align: center;
  margin-top: -5px;
  
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Search/>
                        <Input/>
                    </SearchContainer>
                </Left>
                <Center>
                  <Logo>ARC.Commerce.</Logo>
                </Center>
                <Right>
                  <MenuItem>Register</MenuItem>
                  <MenuItem>Sign In</MenuItem>
                  <MenuItem>
                    <Badge badgeContent={4} color="primary">
                      <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
