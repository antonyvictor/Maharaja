import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './home.css'
function BasicExample() {
  return (
    <>
    
      <Navbar className="navbar1" style={{backgroundColor:"#c02080"}} data-bs-theme="dark">
        <Container>
         
          <Nav className="nav1">
            <Nav.Link href="#home"className="nav2">Home</Nav.Link>
            <Nav.Link href="#features"className="nav2">About us</Nav.Link>
            <Nav.Link href="#Ice cream"className="nav2">Ice cream</Nav.Link>
            <Nav.Link href="#Gallery"className="nav2">Gallery</Nav.Link>
            <Nav.Link href="#Contact"className="nav2">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
     
    </>
  );
}

export default BasicExample;