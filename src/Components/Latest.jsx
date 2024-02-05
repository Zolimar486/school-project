import styled from 'styled-components'
import { spacing } from '../Utilities/spacing'


const Container = styled.div`
margin:50px auto;
max-width:400px;
font-family:'Poppins', sans-serif;
display:flex;
align-items:center;
justify-content:center;

@media only screen and (min-width:768px){
  margin:100px 0px;
  max-width:100%;
}
`

const Wrapper = styled.div`
width:100%;
max-width:1024px;
`

const Top= styled.div``

const Title= styled.h3`
color:#2F327D;
text-align:center;
`

const Desc= styled.p`
color:#696984;
text-align:center;

`

// Done with Top

const Bottom = styled.div`
margin-top:${spacing.md};
@media only screen and (min-width:768px){
  display:flex;
 
}


`

const Left = styled.div`
flex:1;

`

const InfoImage= styled.div`
@media only screen and (min-width:768px){
  width:90%;
  height:40%;
}
`

const Image= styled.img`
width:100%;
height:100%;



`

const InfoContainer = styled.div`
margin-top:${spacing.md};
@media only screen and (min-width:768px){
  width:90%;
 
}
`

const Button = styled.button`
background-color:#49BBBD;
padding:0.4rem 1.2rem;
border:none;
border-radius:10px;
cursor:pointer;
color:white;

`

const H3= styled.h3`
color:#252641;
@media only screen and (min-width:768px){
  font-size:14px;
}
`

const Paragraph= styled.p`
color:#696984;
@media only screen and (min-width:768px){
  font-size:12px;
}
`

const ButtonRead= styled.button`
border:none;
text-decoration:underline;
color:#696984;
`


const Right= styled.div`
display:flex;
flex-direction:column;
gap:18px;
@media only screen and (max-width:768px){
  margin-bottom:${spacing.md};
}


@media only screen and (min-width:768px){
  flex:1;
 
}
`

const Items = styled.div`
display:flex;
gap:10px;
margin:0px;


`

const Picture= styled.img`
width:100px;
height:auto;

@media only screen and (min-width:768px){
  height:110px;
  width:120px;
}
`
const InfoContent= styled.div`
display:flex;
flex-direction:column;
gap:10px;
`

const H4= styled.h4`
color:#252641;
font-size:14px;
margin:0;

`

const Desc1= styled.p`
color:#696984;
margin:0;
font-size:12px;

@media only screen and (min-width:768px){
  font-size:14px;
}
`



export default function Latest(){
  return(
 <Container>
  <Wrapper>
  <Top>
    <Title>Lastest News and Resources</Title>
    <Desc>See the developments that have occurred to TOTC in the world</Desc>
  </Top>
  <Bottom>
    <Left>
      <InfoImage>
        <Image src="./image/latest.png" />
      </InfoImage>
      <InfoContainer>
        <Button>News</Button>
        <H3>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</H3>
        <Paragraph>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</Paragraph>
        <ButtonRead>Read More</ButtonRead>
      </InfoContainer>
    </Left>
    <Right>
      <Items>
        
      <Picture src="./image/press.png" />
  
  <InfoContent>
    <H4>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</H4>
    <Desc1>Class Technologies Inc., the company that created Class,...</Desc1>
  </InfoContent>
      </Items>
      <Items>   
      <Picture src="./image/news.png" />
  <InfoContent>
    <H4>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</H4>
    <Desc1>Class Technologies Inc., the company that created Class,...</Desc1>
  </InfoContent>
    </Items>
      <Items>
        
      <Picture src="./image/newcat.png" />
  
  <InfoContent>
    <H4>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</H4>
    <Desc1>Class Technologies Inc., the company that created Class,...</Desc1>
  </InfoContent>
   </Items>    
    </Right>
  </Bottom>

  </Wrapper>
 </Container>

  )
}