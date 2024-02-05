import styled from 'styled-components'
import {CgMenu} from 'react-icons/cg'
import {SlClose} from 'react-icons/sl'
import {useState} from 'react'

const Container = styled.div`
backgroun-color:transparent;
font-family: 'Poppins', sans-serif;

padding:1rem;
height:50px;
position:relative;

  display:flex;
  justify-content:space-between;
  align-items:center;


`

const Left = styled.div``

const Icons = styled.div``

const Image = styled.img`
with:30px;
height:30px;
`

const Right= styled.div`


@media only screen and (max-width:768px){
  position:absolute;
  top:0px;
  left:${({isOpen})=> (isOpen? "0px" : "-500%")};
  width:100%;
  height:max-content;
  background-color:white;
  z-index:9999;
  transition:all 0.5s ease-out;
}
`

const List = styled.ul`
list-style:none;
display:flex;
align-items:center;
justify-content:center;

@media only screen and (max-width:768px){
  color:#136CB5;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
}


  
`

const Items = styled.li`

@media only screen and (min-width:768px){
  margin:0px 5px;
  color:white;
}


`

const Buttons = styled.div`

`

const Button = styled.button`
margin-bottom:5px;
padding:.4rem 1.3rem;
border-radius:5px;
border:none;
margin:0px 5px;

@media only screen and (max-width:768px){
  
  background-color:#136CB5;
  opacity:${props=> props.direction ==="right" && "0.7" };
  color:white;
  
}

@media only screen and (min-width:768px){
  background-color:${props=> props.direction ==="right" && "#00FFF0" };
  opacity:${props=> props.direction ==="right" && "0.7" };
  color:${props=> props.direction ==="right" && "white" };





`

const Close = styled.div`
display:none;

@media only screen and (max-width:768px){
  display:block;
  position:absolute;
  top:10px;
  right:15px;
}
`

const Menu = styled.div`
display:none;

@media only screen and (max-width:768px){
  display:block;
}
`

export default function Navbar(){

  const [isOpen, setIsOpen]= useState(false)

 return(
   
   <Container>
    
        <Left>
        <Icons> 
        <Image src="./image/logo.png"/>
        </Icons>
        </Left>
       
        <Right isOpen = {isOpen}>
          <List>
            <Items>Home</Items>
            <Items>Career</Items>
            <Items>Courses</Items>
            <Items>Blog</Items>
            <Items>Contact us</Items>
            <Buttons>
            <Button>Login</Button>
            <Button direction="right"> Sign Up</Button>
          </Buttons>
          
          </List>
          <Close>
            <SlClose fill="#136CB5" onClick = {()=> setIsOpen(!isOpen)}/>
          </Close>
          
     
        </Right>

        <Menu>
        <CgMenu fill="#136CB5" onClick = {()=> setIsOpen(!isOpen)} />
      
        </Menu>
          
    
   </Container>
 )

}