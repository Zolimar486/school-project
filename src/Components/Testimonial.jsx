import styled from 'styled-components'
import { spacing } from '../Utilities/spacing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { array } from '../dummy'
import { useState } from 'react'



const Container = styled.div`
margin-top:${spacing.lg};
display:flex;
align-items:center;
justify-content:center;
font-family:'Poppins', sans-serif;
@media only screen and (max-width:768px){
  margin:0px auto;
  max-width:400px;
}

@media only screen and (min-width:768px){
  margin:0px;
  max-width:100%;
}

`


const Wrapper= styled.div`
width:100%;
max-width:1024px;

@media only screen and (min-width:768px){
  display:flex;
  align-items:center;
  justify-content:center;
  gap:5px;
  
}

@media only screen and (min-width:1024px){
  gap:18px;
  
  
}

`

const InfoContainer=styled.div`
@media only screen and (min-width:768px){
flex:1;
}

  
`

const Elemenst= styled.div`
display:flex;
align-items:center;

gap:4px;
`


const Span= styled.span`
color:#525596;
font-size:10px;
`

const Line = styled.div`
width:30px;
height:1px;
background-color:#525596;
`

const H2= styled.h2`
color:#2F327D;
`

const Paragraph= styled.p`
color:#696984;
margin-top:${spacing.xs};
@media only screen and (max-width:768px){
  font-size:0.8rem;
}

@media only screen and (min-width:768px){
  width:90%;
}





`

const Buttons = styled.div`
margin-top:${spacing.md};
width:200px;
height:20px;
padding:10px;
border-radius:20px;
border:1px solid #49BBBD;
display:flex;
align-items:center;

position:relative;
`

const Button = styled.button`
color:#49BBBD;

border:none;
background-color:white;
`

const Circle= styled.div`
width:35px;
height:35px;
border-radius:50%;
border:1px solid #49BBBD;
display:flex;
align-items:center;
justify-content:center;
position: absolute;
top: 0px;
right: 0px;

`
//Done with InfoContainer 

const InfoSlider =styled.div`
position:relative;


@media only screen and (max-width:768px){

  margin-top:${spacing.md}
}

@media only screen and (min-width:768px){
 flex:1;
 
}


@media only screen and (min-width:1024px){
  flex:1;
 }
`

const InfoPicture= styled.div`
width:70%;

`


const Image = styled.img`
width:100%;
height:400px;


`

const Icon= styled.div`
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:40%;
right:24%;
background-color:white;

@media only screen and (min-width: 768px) {
  right: 26%;
  top:46%;
}

@media only screen and (min-width: 1024px) {
  right:26%;
  top:46%;
}

`

const WrapperInfo=styled.div`
width:80%;
height:160px;
background-color:white;
border-left:6px solid #FC6565;
padding:14px;
margin-bottom:16px;
position:absolute;
bottom:-40px;
left:14px;
border-radius: 4px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease-in-out;

&:hover {
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

@media only screen and (min-width:768px){
  width:300px;
  bottom:-70px;

}


@media only screen and (min-width:1024px){
  width:350px;
  bottom:-70px;
  padding:25px;
  
}
`

const Section = styled.div``

const Line1= styled.div``

const Text= styled.p`
color:#5F5F7E;
font-size:12px;


`

const InfoName= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-top:${spacing.md};
`

const Name= styled.span`
  font-size:12px;
  color:#5F5F7E;

`

const Review= styled.div`
display:flex;
flex-direction:column;


`

const Img= styled.img`
width:40%;
`

const Span1= styled.span`
  font-size:12px;
  color:#5F5F7E;

`


export default function Testimonial(){

  const[activateIndex, setActivateIndex]=useState(0)

  
  const handleClick= ()=>{
    
    setActivateIndex((prev)=> (prev + 1) % array.length)
  }
 


  const testimonial = array[activateIndex]

  return(
   <Container>
    <Wrapper>
    <InfoContainer>
     <Elemenst>
      <Line></Line>
      <Span>Testimonial</Span>
      

     </Elemenst>
     <H2>What They Say?</H2>
     <Paragraph>TOTC has got more than 100k positive ratings from our users around the world. </Paragraph>
     <Paragraph>Some of the students and teachers were greatly helped by the Skilline</Paragraph>
     <Paragraph>Are you too? Please give your assessment</Paragraph>

     <Buttons>
     <Button>
     Write your assessment
      

     </Button>
     <Circle><FontAwesomeIcon icon={faArrowRight} style={{color:"#49BBBD"}} /></Circle>

     </Buttons>

    </InfoContainer>
    <InfoSlider>
     
      <InfoPicture>
        <Image src={testimonial.image} />
      
      </InfoPicture>
      
       <WrapperInfo>
        <Section>
        <Line1></Line1>
         <Text>{testimonial.desc} </Text>
        
        </Section>
        <InfoName>
        <Name>{testimonial.name} </Name>
        <Review>
          <Img src="./image/stars.png" />
          <Span1>12 reviews at Yelp</Span1>
        </Review>
        </InfoName>

       </WrapperInfo>
  
    <Icon>
    <FontAwesomeIcon icon={faArrowRight} style={{color:"#36C8F5"}} onClick={handleClick} />
    </Icon>
    </InfoSlider>

    </Wrapper>
   

   </Container>

  )
}