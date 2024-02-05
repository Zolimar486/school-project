import styled from 'styled-components'
import { spacing } from '../Utilities/spacing'
import { useState } from 'react'

const Container = styled.div`
margin-top:${spacing.lg};
font-family:'Poppins', sans-serif;
display:flex;
align-items:center;
justify-content:center;
position:relative;

@media only screen and (max-width:768px){
  margin:0px auto;
  max-width:400px;
}

@media only screen and (min-width:768px){
  margin:0px;
  max-width:100%;
}
`

const Wrapper1 = styled.div`
width:100%;
max-width:1024px;
`

const Section1 = styled.div`
margin-top:${spacing.md};
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

const H3 = styled.h3`
color:#2F327D;
font-weight:bold;
margin:0;
`

const Span = styled.span`
color:#00CBB8;
`

const Desc = styled.p`
color:#696984;
margin:0;
text-align:center;
width:100%;
margin:${spacing.sm};


@media only screen and (max-width:768px){
  font-size:14px;
}
`

// Done with Section1

const Section2 = styled.div`
margin-top:${spacing.md};
@media only screen and (min-width:768px){
  display:flex;
  align-items:center;
  justify-content:center;
  gap:5px;

}

`

const InfoImage = styled.div`
flex:1;
`

const Image = styled.img`
width:100%;
height:auto;

`

const InfoContainer = styled.div`
flex:1;
`

const H2 = styled.h3`
color:#2F327D;
font-weight:semi-bold;

`

const Wrapper = styled.div`
 @media only screen and (max-width:768px){
  margin-top:${spacing.md}
 }
`

const Items = styled.div`
display:flex;
align-items:center;
gap:30px;
`

const Image1 = styled.img`
width:20px;
height:20px;
`

const Paragraph = styled.p`
color:#696984;
font-weight:regular;



@media only screen and (max-width:768px){
  font-size:14px;
}

`

//Done with Section 2

const Section3 = styled.div`

margin-top:${spacing.md};

@media only screen and (min-width:768px){
  display:flex;
  align-items:center;
  
  gap:20px;
}

`

const InfoText = styled.div`
flex:1;
`

const Text = styled.p`
color:#696984;
font-weight:regular;



@media only screen and (max-width:768px){
  font-size:14px;
}

@media only screen and (min-width:768px){
  width:350px;
}
`

const InfoPhoto = styled.div`
@media only screen and (max-width:768px){
  margin-top:${spacing.md};
}

flex:1;
`

const Photo = styled.img`
width:100%;
height:400px;
`

//Done with section 3

const Accordion = styled.div`
positon:absolute;
bottom:${({ open }) => (open ? "20px" : "0px")}

`

const Section4 = styled.div`
margin-top:${spacing.md};

@media only screen and (min-width:768px){
  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;
}

`

const PhotoInfo = styled.div`
flex:1;
`

const Picture = styled.img`
width:100%;
height:50%;

@media only screen and (min-width:768px){
  width:80%;
}
`

const InfoData = styled.div`
flex:1;


`

const Text1 = styled.p`
color:#696984;
font-weight:regular;
width:100%;

@media only screen (min-width:768px){
  width:300px;
}



@media only screen and (max-width:768px){
  font-size:14px;
}

`

// Done with Section 4

const Section5 = styled.div`


@media only screen and (max-width:768px){
  margin-top:${spacing.md};
}

@media only screen and (min-width:768px){
  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;
}

`

const InfoTools = styled.div`
flex:1;
`

const Text2 = styled.p`
color:#696984;
font-weight:regular;
width:100%;

@media only screen and (min-width:768px){
  width:430px;
}



@media only screen and (max-width:768px){
  font-size:14px;
}
`

const InfoPicture = styled.div`
flex:1;

@media only screen and (max-width:768px){
  margin-top:${spacing.md};

}



`

const Pictures = styled.img`
width:100%;
height:100%;
`

// Done with Section 5


const Section6 = styled.div`

@media only screen and (max-width:768px){
  margin-top:${spacing.md};
}

@media only screen and (min-width:768px){
  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;
}

`

const Text3 = styled.p`
color:#696984;
font-weight:regular;
width:100%;

@media only screen and (min-width:768px){
 
}



@media only screen and (max-width:768px){
  font-size:14px;
}
`

const Section7 = styled.div``

const Button = styled.button`
background-color:transparent;
padding: 0.6rem 1.4rem;
border:1px solid #00CBB8;
color:#00CBB8;
border-radius:14px;
margin-top:${spacing.lg};
`



export default function Features() {
  const [open, setOpen] = useState(false)

  return (
    <Container >
      <Wrapper1>
        <Section1>
          <H3>Our <Span>Features</Span></H3>
          <Desc>This very extraordinary feature, can make learning activities more efficient</Desc>

        </Section1>


        <Section2>
          <InfoImage>
            <Image src="./image/feature.png" />

          </InfoImage>
          <InfoContainer>
            <H2>A <Span>user interface </Span>designed for the classroom</H2>

            <Wrapper>
              <Items>
                <Image1 src="./image/rectangle.png" />

                <Paragraph>Teachers don’t get lost in the grid view and have a dedicated Podium space.
                </Paragraph>

              </Items>
              <Items>
                <Image1 src="./image/yellow.png" />

                <Paragraph>TA’s and presenters can be moved to the front of the class.
                  .
                </Paragraph>

              </Items>
              <Items>
                <Image1 src="./image/users.png" />

                <Paragraph>Teachers can easily see all students and class data at one time..
                  .
                </Paragraph>

              </Items>

            </Wrapper>

          </InfoContainer>

        </Section2>

        <Section3>
          <InfoText>
            <H2><Span>Tools</Span> For Teachers And Learners</H2>
            <Text>Class has a dynamic set of teaching tools built to be deployed and used during class.
              Teachers can handout assignments in real-time for students to complete and submit.</Text>

          </InfoText>
          <InfoPhoto>
            <Photo src="./image/school.png" />

          </InfoPhoto>

        </Section3>

        {open && <Accordion open={open}>
          <Section4>
            <PhotoInfo>
              <Picture src="./image/quick.png" />

            </PhotoInfo>

            <InfoData>
              <H2>Assessments, <Span>Quizzes</Span>, Tests</H2>
              <Text1>Easily launch live assignments, quizzes, and tests.
                Student results are automatically entered in the online gradebook.</Text1>

            </InfoData>


          </Section4>
          <Section5>
            <InfoTools>
              <H2> <Span>Class Management </Span> Tools for Educators</H2>
              <Text2>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
              </Text2>

            </InfoTools>

            <InfoPicture>
              <Pictures src="./image/tools.png" />

            </InfoPicture>

          </Section5>
          <Section6>
            <PhotoInfo>
              <Pictures src="./image/edu.png" />

            </PhotoInfo>
            <InfoTools>
              <H2>One-on-One <Span>Discussions</Span></H2>
              <Text3>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</Text3>

            </InfoTools>



          </Section6>


        </Accordion>}

        {open ? <Button onClick={() => setOpen(!open)}>Hide Features</Button> : (
          <Button onClick={() => setOpen(!open)}>See more Features</Button>
        )}


      </Wrapper1>


    </Container>

  )

}