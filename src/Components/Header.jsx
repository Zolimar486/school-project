import styled from 'styled-components'


const Container = styled.div`
font-family: 'Poppins', sans-serif;

margin:10px auto;
max-width:400px;

 @media only screen and (min-width:768px){
   margin:10px 0px;
   max-width:100%;
   display:flex;
   justify-content:space-between;
   align-items:center;
 }
`

const Wrapper = styled.div``

const InfoContainer = styled.div`
padding:1rem;

@media only screen and (min-width:768px){
  max-width: 340px;
  min-width: 300px;
}

@media only screen and (min-width:1025px){
  max-width: 500px;
  min-width: 300px;
}
`

const Title = styled.h2`
color:white;

@media only screen and (min-width:1025px){
 font-size:40px;
 font-weight:bold;
}
`

const Span = styled.span``

const Desc= styled.p`
font-size:14px;

color:white;

@media only screen and (min-width:1200px){
 font-size:20px;
 
}
`

const Buttons = styled.div``

const Button = styled.button`
padding:.4rem 1.3rem;
border:none;
background-color:teal;
color:white;
border-radius:8px;
`

const InfoImage= styled.div`

@media only screen and (min-width:768px){
  flex:1;
  max-width: 340px;
  min-width: 300px;
  
}

@media only screen and (min-width:1025px){
  max-width: 500px;
  min-width: 300px;
}
`

const Image = styled.img`

max-width:100%;
height:auto;

@media only screen and (min-width:600px){
  
}
`







export default function Header(){
  return(
  <Container>
    <InfoContainer>
        
        <Title>

           <Span style={{color:"#F48C06"}} >  Studing</Span> Online is now much easier
        </Title>

       <Desc>
       TOTC is an interesting platform that will teach you in more an interactive way
       </Desc>

        <Buttons>

         <Button>Join For Free</Button>
        </Buttons>
      </InfoContainer>


      <InfoImage>

        
        <Image  src='./image/frame 61.png' />
        

      </InfoImage>
  </Container>


  )
}