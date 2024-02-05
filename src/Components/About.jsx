import styled from 'styled-components'
import {spacing} from '../Utilities/spacing'

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
font-family: 'Poppins', sans-serif;

@media only screen and (max-width:600px){
  margin:5px auto;
  max-width:400px;
}

@media only screen and (min-width:600px){
 
  max-width:100%;
}

`



const Title = styled.h2`
font-size:30px;
font-weight:bold;
margin:0;
margin-bottom:${spacing.ms};
`

const Desc = styled.p`

color:#010514;
opacity:0.7;

max-width:500px;

margin:0;
text-align:center;

margin-bottom: ${spacing.sm}; /* Apply spacing utility for margin-bottom */
  padding: ${spacing.sm} 0; 

@media only screen and (min-width:600px){
  
  line-height:1.8rem;
}

@media only screen and (max-width:400px){
  
  margin:10px 12px;
}

`

const Wrapper = styled.div`

@media only screen and (min-width:500px){
  width:100%;
  max-width:1020px;
}

`

const InfoContainer = styled.div`

@media only screen and (min-width:500px){
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:20px;
  
}


`

const Items = styled.div`
margin-bottom:12px;
display:flex;
flex-direction:column;
gap:3px;


@media only screen and (min-width:500px){
  width:250px;
  margin-bottom:0px;
  
  
}


`

const Span = styled.span`
background: -webkit-linear-gradient(#136cb5, #49bbbd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size:45px;

  @media only screen and (max-width:600px){
    font-size:20px;
  }
`

const Text = styled.span`
@media only screen and (max-width:768px){
  font-size:8px;
}



`
const Section1 = styled.div`
margin:40px 0px;
display:flex;
align-items:center;
flex-direction:column;
text-align:center;
`

const H3 = styled.h3`

font-weieght:bold;
color:#2F327D;
margin:0;
margin-bottom:${spacing.ms};

@media only screen and (min-width:768px){
  font-size:32px;
}
`
const Span1 = styled.span`
color:#00CBB8;
`

const Paragrah = styled.p`
color:#696984;
font-weight:normal;
margin:0;
margin-bottom: ${spacing.sm}; /* Apply spacing utility for margin-bottom */
padding: ${spacing.sm} 0; 


@media only screen and (min-width:768px){
  
  width:500px;
}
`

const Br = styled.br``


export default function About() {
  return (

    <Container>
      <Title>Our success</Title>
      <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus atque illum labore, architecto in exercitationem for more info ?   </Desc>
      <Wrapper>
        <InfoContainer>
          <Items>
            <Span>15K+</Span>
            <Text>Students</Text>
          </Items>
          <Items>
            <Span>75%</Span>
            <Text>Total Success</Text>
          </Items>
          <Items>
            <Span>35</Span>
            <Text>Main Questions</Text>
          </Items>
          <Items>
            <Span>26</Span>
            <Text>Chief Experts</Text>
          </Items>
          <Items>
            <Span>16</Span>
            <Text>Years of Experience</Text>
          </Items>
        </InfoContainer>

    

      <Section1>
        <H3>All-In-One <Span1>Cloud Sowftware </Span1></H3>
        <Paragrah> TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
        </Paragrah>

      </Section1>

      </Wrapper>

    </Container>
  )
}