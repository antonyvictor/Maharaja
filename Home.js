
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img27 from './images/27.png';
import icon from './images/icon.png';
import ice from './images/ice.png';
import ice2 from './images/ice2.png';



function home(){
    return(
        <>
      
       <div className='h2 '>
      <Row>
        <Col> 
    <p className='h1'>A Mobile app that enable you<br/>download and acess directly<br/>Using your android smart<br/>phone </p>
    <button className="btn1" type="button">Download App Click</button>
    </Col>
      </Row>
      </div>
      <img className='img27' src ={img27}/><br/><br/>
      <h1 className='h3'>WELCOME TO MAHARAJA ICE CREAM</h1>
      <img className='icon' src ={icon}/>
      <br/><br/><br/>
      <img className='ice' src ={ice}/>
      
      <div className='div2'>
        <h1 className='h4'>A Creamy Delight That<br/>
      Challenges Your Taste</h1> 
      
      <p className='h5'>
          <b>Maharaja Ice cream</b> spreads the happiness <b>across India</b> to people of all ages.
           We are known to be beating the heat with refreshing and healthy Fruttare,
           professing your love with crunching away all your worries with our <b>ice cream</b> feast that brightens your dull day with our <b>delicious ice cream,
           sharing sweet victories</b> with your beloved ones with Kulfeez or special experience with frozen treat in your life.
           <b>Maharaja Ice cream</b> is committed to excellence and zeal in <b>this field since 2004.</b>
           We are known to be dedicated in <b>manufacturing and marketing </b>world class quality superior ice cream made with<b> pure milk and cream.</b>
           Our main aim is to always determine in <b>maintaining integrity and commitment in providing quality and value.</b>
           We provide delicious ice cream at reasonable price</p>
          <button className="btn2" type="button">Contact Us Today</button>
           </div>
       
           
           <Container>
      <Row>
        <Col><div className='c1'> <img className="img2"src={ice2}/><h1 className='c2'>WEDDINGS</h1>
        <p className='c3'>
        Our company has achieved widespread recongnition to provide <b>Marriage Ice Cream Catering for clients</b>
        </p>
        </div>  </Col>
        <Col><div className='c1'> <img className="img2"src={ice2}/><h1 className='c2'>CORPORATE EVENTS </h1> 
        <p className='c3'>We Provide<b> High-Quality Natural Ice Creams.</b>We do not use any Artificial Colors or Essence.

        </p>
        </div>
        </Col>
        <Col><div className='c1'><img className="img2"src={ice2}/> <h1 className='c2'>BIRTHDAYS </h1>
         <p className='c3'>We are recognized as one of the foremost service providers of<b> Birthday Party
         Catering Services.</b>
        
        </p>
        </div></Col>
      </Row>
    </Container>
      




    </>
    )
}
export default home;