'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample(props) {
    
    const handleSignOut = () => {
        props.setIsLogged(false)
        localStorage.clear()
    }


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Country Details</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='hover:bg-gray-600  rounded' href="/">Home</Nav.Link>
            <Nav.Link className='hover:bg-gray-600  rounded' href="/">Create</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleSignOut} className='bg-gray-600 rounded hover:font-md text-center' href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;