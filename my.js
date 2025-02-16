import icon from './images/icon.png';
import g1 from './images/g1.jpg';
import g2 from './images/g2.jpg';
import g3 from './images/g3.jpg';
import g4 from './images/g4.jpg';
import g5 from './images/g5.jpg';
import g6 from './images/g6.jpg';
import g7 from './images/g7.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './gallery.css'
function Basic() {
  return (
    <>
    <div className='g1'>
        <h1 className='g2'>Our Gallery</h1>
        <img className='icon' src ={icon}/>
        <br/>
        <br/>  
        <Container>
      <Row>
        <Col><img className='g11' src ={g1}/></Col>
        <Col><img className='g12' src ={g2}/></Col>
      </Row>
      <br/>
      <br/>
      <Row>
        <Col><img className='g13' src ={g3}/></Col>
        <Col><img className='g14' src ={g4}/></Col>
        <Col><img className='g15' src ={g5}/></Col>
      </Row>
      <br/>
      <br/>
      <Row>
        <Col><img className='g16' src ={g6}/></Col>
        <Col><img className='g17 ' src ={g7}/></Col>
      </Row>
    </Container>
        </div>

    </>
  )
}
export default Basic;