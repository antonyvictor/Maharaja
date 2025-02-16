import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1 from './images/icon.png';
import con1 from './images/contact1.png'
import './contact.css'


function Con() {

  return (
    <>
      <h1 className='con1'>CONTACT US</h1>
      <img className='icon1' src={icon1} />
      <br />
      <br />
      <Container >
        <Row>
          <Col><h3 className='con11'>Main Office</h3>
            <p className='con12'> <span className='phone'><i class="fas fa-map-marker-alt"></i></span>No.14/2, Police manickam Street, Ayanavaram,Chennai - 600 023 <br /><span className='phone'><i class="fas fa-phone" ></i></span>
              +91 94440 63524 <span className='phone'><i class="fas fa-phone"></i></span>
              +91 44 - 2645 3524<br />
              <span className='phone'><i class="fas fa-envelope"></i></span> enquiry@maharajaicecream.com</p>

            <br />
            <br />
            <h3 className='con11'>Retail Outlet</h3>
            <p className='con12'><span className='phone'><i class="fas fa-map-marker-alt"></i></span> No.43,Audiappa Naicken Street, Sowcarpet,Chennai - 600 079 <br /> <span className='phone'><i class="fas fa-phone"></i></span> +91 94440 63524</p>
            <div className="form-container">
              <form >
                <label>Name* :</label>
                <input type="text" name="name" required />

                <label>Email* :</label>
                <input type="email" name="email" required />

                <label>Mobile* :</label>
                <input type="tel" name="mobile" required />

                <label>Interested in Products :</label>
                <select name="product" required>
                  <option value="">SELECT ANY PRODUCTS</option>
                  <option value="Product 1">ABU GATTA</option>
                  <option value="Product 2">CUSTARD APPLE</option>
                  <option value="Product 3">CHIKU</option>
                  <option value="Product 3">PAAN</option>
                  <option value="Product 3">CHOCO VANILLA</option>
                </select>

                <label>Code* :</label>
                <div className="captcha-box">
                  <span className="captcha"></span>
                  <input type="text" name="code" required />
                </div>
                <small>(Please enter the code shown here)</small>

                <button type="submit">SEND</button>
              </form>
            </div>
          </Col>


          <Col> <img className='con2' src={con1} /></Col>
        </Row>
      </Container>

      
    </>
  );

}
export default Con;