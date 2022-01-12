import styled from "styled-components"

const Container = styled.div`
  height: 30px;
  background-color: #007880;
  color: white; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`

const Announcement = () => {
    return (
       <Container>
           Super Savers Deal!! 40% All Purchases
       </Container>
    )
}

export default Announcement
