import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import icon from './images/icon.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import about1 from './images/about1.jpg';
import about2 from './images/about2.jpg';
import about3 from './images/about3.jpg';
import cr1 from './images/cr1.png';
import './about.css'
function AutoLayoutExample() {
    return (
        <>
        <div className='ab1'>
    <h1 className='ab2'>About us</h1>
    <img className='icon' src ={icon}/>

      <Container>
        <Row>
          <Col>
          <h1 className='ab3'>Company Porfile</h1>  
          <p className='ab4'><b>Maharaja Ice cream</b> is one among the <b>famed ice cream manufactures and distributers of ice cream </b>of numerous flavours. 
            We are efficient and paramount in <b>manufacturing and supplying Desert Ice cream </b>with numerous flavours such as <b>Rajasthan kulfi, 
          Chocolate and Vanilla.</b> Our <b>ice creams</b> are prepared in fresh manner and are garnished with fresh cherry and chocolate crunch.
           We use <b>fresh finest quality milk cream </b>and crushed ice to prepare <b>the delicious ice cream</b>
           <br/>Our <b>Ice creams are supplied all over India.</b> 
           We attain fresh raw materials for <b>preparing delicious ice creams.</b> Our firm workers are expert in preparing delicious ice cream. 
           We use advanced machine for preparing fresh ice creams from hygienically processed methods. We use perfect packaging materials in order safeguard our products against various kind of tampering. 
           Our tight and protected ice cream package protects against any weather condition.<br/>He started his business in a small firm but now due to his tremendous efforts his firm has lead up to higher standard. 
           He provided fresh and quality ingredients in preparing fresh and delicious ice cream that gives the hygienic taste to each and every individual. 
           Hence he made his firm to be the famous firm for the past many years and will be the best international in the upcoming years</p>
          
          <h1 className='ab5'>Director Porfile</h1> <p className='ab6'>Maharaja ice cream belongs to Mr.G. Ramnivas in the field of providing world class quality ice creams to the people in Chennai. His journey was started in the year 1989 was set up as Rajasthan Kulfi Ice Cream and Maharaja Ice Cream. His effort and tremendous struggle made him to reach higher standards and hard to eye capture the business growth. His diligence and foresight for the business created the leading name with excellent class and pure delicious tasty ice cream. He is true towards legacy of business</p></Col>
        </Row>
      </Container>
      

      <Container>
      <Row>
        <Col><img className="ic1"src={icon1}/>
        <h1 className='ic11'>Maharaja Ice cream<br/>PRODUCT MISSION</h1>
        <p className='ic12'>
        To distribute and sell the world class
        quality natural ice cream with a spontaneous commitment to incorporate wholesome natural ice creams and
        promote the business practices the respect of Earth and the Environment
        </p>
        </Col>
        <Col><img className="ic2"src={icon2}/>
        <h1 className='ic11'>Maharaja Ice cream<br/>ECONOMIC MISSION</h1>
        <p className='ic12'>
        To operate the Company on financial basis on profitable growth that increases the value of our stakeholders and
        expands opportunities for development and career growth for our employees.
        </p></Col>
        <Col><img className="ic3"src={icon3}/>
        <h1 className='ic11'>Maharaja Ice cream<br/>SOCIAL MISSION</h1>
        <p className='ic12'>
        To make the company grow actively and to be recognized as the central role of the business plays in the society to initiate innovative ways in improving quality of life nationally and 
        internationally.
        </p></Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col><img className="cr1"src={cr1}/></Col>
        <Col><div className='cr11'><Carousel  >
          <Carousel.Item>
            <img
            className="cr12"
            src={about1}
            alt="First slide"></img>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="cr12"
            src={about2}
            alt="First slide"></img>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="cr12"
            src={about3}
            alt="First slide"></img>
          </Carousel.Item>
          </Carousel></div>
          </Col>
      </Row>
      </Container>
      </div>
      </>
       );
    }
    export default AutoLayoutExample;