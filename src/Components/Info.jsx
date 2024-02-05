import styled from 'styled-components'
import { spacing } from '../Utilities/spacing'
import {HiOutlineNewspaper} from 'react-icons/hi'
import {SlCalender} from 'react-icons/sl'
import {PiUsersThreeLight} from 'react-icons/pi'



const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:${spacing.ld};
font-family: 'Poppins', sans-serif;



@media only screen and (max-width:768px){
  margin:0px auto;
  max-width:400px;
}

@media only screen and (min-width:768px){
  margin:0px;
  max-width:100%;
}

`

const Wrapper = styled.div`
width:100%;
max-width:1024px;

`

const Top = styled.div`

@media only screen and (min-width:768px){
  display:flex;
  gap:10px;

}
`


const Box = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color: white;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Box shadow definition */
 padding: 20px;
 position:relative;
 height:auto;
 

 @media only screen and (max-width:768px){
  padding:10px;
  margin-bottom:${spacing.xl};
 }
 
`

const Icons = styled.div`
width:50px;
height:50px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
background-color:${props => props.bg};
position:absolute;
top:-20px;

`

const Content= styled.div`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
flex-direction:column;
margin-top:${spacing.xl};

`

const H4 = styled.h4`
color:#2F327D;
margin:0;
`

const Desc= styled.p`
color:#696984;

`

const Middle = styled.div`
margin-top:${spacing.md};
`

const Center= styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


`

const H3 = styled.h3`
color:#2F327D;
Text-align:center;
margin:0;
`

const Span = styled.span`
color:#00CBB8;
`

const Paragraph= styled.p`
color:#696984;
width:700px;
margin:0;
margin-bottom: ${spacing.sm}; /* Apply spacing utility for margin-bottom */
padding: ${spacing.sm} 0; 

@media only screen and (max-width:768px){
  width:100%;
}

`

const Bottom = styled.div`


@media only screen and (min-width:768px){
  display:flex;
  gap:80px;
 margin-top:${spacing.md};

}
`


const Section= styled.div`
margin-bottom:${spacing.sm};
flex:1;
`

const InfoImage= styled.div`
position:relative;
`

const Image = styled.img`
width:100%;
height:100%;
`

const InfoContainer = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:5px;
color:white;
background-color:rgba(0,0,0, 0.4);
`

const Title = styled.h3`
margin:0;
font-weight:semiBold;

`

const Button = styled.button`
padding: 10px 20px;
background-color:transparent;
color:white;
cursor:pointer;
border:1px solid white;
border-radius:18px;

`

const Button1 = styled.button`
padding: 10px 20px;
background-color:#23BDEE;
color:white;
cursor:pointer;
border:none;
border-radius:18px;
`

const LastSection = styled.div`

@media only screen and (min-width:768px){
  display:flex;
  gap:80px;


}

margin-top:${spacing.md};
`

const Left = styled.div`
position:relative;
flex:2;
`

const H33= styled.h3`
position:relative;
color:#2F327D;
margin:0;
margin-bottom: ${spacing.sm};
z-index:999;
`

const Spans= styled.span`
color:#00CBB8;

`

const Text = styled.p`
color:#696984;
margin:0;
margin-bottom: ${spacing.sm}; /* Apply spacing utility for margin-bottom */
padding: ${spacing.sm} 0; 
`

const Circle1 = styled.div`
width:35px;
height:35px;
border-radius:50%;
background-color:#00CBB8;
position:absolute;
top:-7px;
left:-10px;
z-index:0;
`

const Circle2 = styled.div`
width:15px;
height:15px;
border-radius:50%;
background-color:#00CBB8;
position:absolute;
bottom:60px;
right:10px;
z-index:0;
`

const Button2 = styled.a`
margin-bottom:${spacing.sm};
color:#696984;
text-decoration:underline #696984;


`
const Right = styled.div`
position:relative;
flex:2;

@media only screen and (max-width:768px){
  margin-top:${spacing.md}
}
`

const Img = styled.img`
width:100%;
height:100%;
position:relative;
z-index:2;
`

const Rectangle= styled.div`
width:80px;
height:100px;
background-color:#23BDEE;
border-radius:12px;
position:absolute;
top:-10px;
left:-10px;
z-index:0;
`

const Rectangle1= styled.div`
width:80px;
height:100px;
background-color:#00CBB8;;
border-radius:12px;
position:absolute;
bottom:-10px;
right:-10px;
z-index:0;

`




export default function Info(){

  return(
<Container>
<Wrapper>
   <Top>
    <Box>
    <Icons bg="#5B72EE">
      <HiOutlineNewspaper style ={{color:"white", fontSize:"20px"}} />
    </Icons>
    <Content>
    <H4>Online Billing</H4>
    <H4>Invoicing & Contracts</H4>
    <Desc>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</Desc>
    </Content>

    </Box>
    <Box>
    <Icons bg="#00CBB8">
      <SlCalender style={{color:"white", fontSize:"20px"}} />
    </Icons>
    <Content>
    <H4>Easy Scheduling &</H4>
    <H4>Attendence Tracking</H4>
    <Desc>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</Desc>
    </Content>

    </Box>
    <Box>
    <Icons bg="#29B9E7">
      <PiUsersThreeLight style ={{color:"white", fontSize:"20px"}} />
    </Icons>
    <Content>
    <H4>Customer Tracking</H4>
    <Desc>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </Desc>
    </Content>

    </Box>

   </Top>
   <Middle>
   <Center>
   <H3>What is <Span>TOTC?</Span></H3>
    <Paragraph>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</Paragraph>

   </Center>

   </Middle>
   <Bottom>
   <Section>
    <InfoImage>

     <Image src='./image/teacher.png'/> 

     <InfoContainer>

      <Title>For Instructor</Title>
      <Button>Start a class today</Button>
     </InfoContainer>
    </InfoImage>


    </Section>

    <Section>
    <InfoImage>

<Image src='./image/students.png'/> 

<InfoContainer>

 <Title>For Students</Title>
 <Button1>Enter Access Code</Button1>
</InfoContainer>
</InfoImage>
    </Section>

   
   </Bottom>

   <LastSection>

    <Left>

    <H33>
    Everything you can do in a physical classroom, <Spans> you can do with TOTC</Spans>
    </H33>

    
    <Text>
    TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.

    </Text>

    <Circle1></Circle1>

    <Circle2></Circle2>

    <Button2>Learn More</Button2>
    </Left>

   <Right>

    <Img src="./image/img.png"/>
    <Rectangle></Rectangle>

    <Rectangle1></Rectangle1>
   </Right>
   </LastSection>
  </Wrapper>
  </Container>

  )
    }