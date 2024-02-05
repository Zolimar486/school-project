import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Post from '../Components/Post'
import About from '../Components/About'
import Info from '../Components/Info'
import Circle from '../Components/Circle'
import { spacing } from '../Utilities/spacing'
import Features from '../Components/Features'
import Testimonial from '../Components/Testimonial'
import Latest from '../Components/Latest'
import Footer from '../Components/Footer'


const Container = styled.div`
overflow:hidden;

`

const Wrapper = styled.div`
background-color:#49BBBD;


`
const Padding = styled.div`
@media only screen and (max-width:768px){
  padding:${spacing.sm};
}

@media only screen and (min-width:768px){
  padding:${spacing.md};
}


@media only screen and (min-width:1200px){
  padding:0px;
}
`

export default function Home(){
  return(
    
    <Container>

     <Wrapper>
     <Navbar/>
     <Header/> 
     </Wrapper>
     <Padding/>
     <About/>
     <Info/>
     <Features/>
     <Testimonial/>
     <Latest/>
     <Footer/>
         
      
     </Container>
  )
}