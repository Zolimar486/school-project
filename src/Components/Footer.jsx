import styled from 'styled-components'
import { spacing } from '../Utilities/spacing'

const Container = styled.div`
font-family:"Poppins", sans serif;
margin-top:${spacing.md};
background-color:#252641;
height:35vh;
display:flex;
justify-content:center;
padding:40px 0px;

`

const Wrapper = styled.div``

const Top= styled.div`
display:flex;
align-items:center;
gap:25px;
width:55%;
margin:0px 50px;
`

const Logo= styled.img`
width:50px;
height:50px;
`

const Line= styled.div`
width:2px;
height:40px;
background-color:#626381;
`

const Span= styled.span`
color:white;
font-size:12px;
`

//Done with Top


const Middle= styled.div`
margin-top:${spacing.xl}
`

const SectionTop= styled.div``

const H4 = styled.h4`
color:#B2B3CF;
font-size:12px;
text-align:center;
`

const BoxBottom= styled.div`
display:flex;
gap:5px;
margin:0px 25px;

@media only screen and (min-width:768px){
  gap:10px;
}
`

const BoxInput= styled.div`
width:150px;
border-radius:18px;
border:1px solid #83839A;
padding:5px ;

@media only screen and (min-width:768px){
  width:180px;
}
`

const Input = styled.input`
border:none;
outline:none;
background-color:transparent;
margin:0px;
`

const Button = styled.button`
padding:.4rem 1.4rem;
background-color:#49BBBD;
color:white;
border:none;
border-radius:18px;
`
// Done with Middle

const Bottom= styled.div`

@media only screen and (max-width:768px){
  margin:60px 30px;
}

@media only screen and (min-width:768px){
  margin:60px 30px;
}
`

const Section1= styled.div`
display:flex;
align-items:center;
gap:10px;
`

const Span1= styled.span`
color:#B2B3CF;
font-size:10px;
`

const Line1= styled.div`
width:1px;
height:8px;
background-color:#B2B3CF;
`

const Section2=styled.div``

const Text= styled.p`
color:#B2B3CF;
font-size:10px;
margin:5px 50px;
`


export default function Footer(){
  return(
  <Container>
   <Wrapper>
   <Top>
    <Logo src="./image/logo.png"/>
    <Line></Line>
    <Span>Virtual Class for Zoom</Span>
    </Top>
    <Middle>
      <SectionTop>
        <H4>Subscribe to get our Newsletter</H4>
      </SectionTop>
      <BoxBottom>
        <BoxInput>
          <Input type="text" placeholder='Your Email' />
        </BoxInput>
        <Button>Subscribe</Button>
      </BoxBottom>
    </Middle>
    <Bottom>
      <Section1>
        <Span1>Careers</Span1>
        <Line1></Line1>
        <Span1>Privacy Policy</Span1>
        <Line1></Line1>
        <Span1>Terms & Conditions</Span1>
      </Section1>
      <Section2>
        <Text>© 2021 Class Technologies Inc. </Text>
      </Section2>
    </Bottom>
   </Wrapper>
    </Container>

  )
}