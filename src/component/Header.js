import './Header.css';
    import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useHistory } from 'react-router-dom';


  
function Header() {
  const history=useHistory()
  const tab =()=>{
history.replace('/contact')
  }
  
  return (
    <div className='app'>

      
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand style={{textDecorationColor:"black"}} href="#" ><Link to="/">Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link href="#action1"> <Link to="/home" variant="info">New</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to="/service">Service</Link> </Nav.Link>
            <Nav.Link href="#action2"><Link to="/contact">Contact</Link> </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Habesha Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"> Eri Habesha Something else here
              
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><Link to="/footer">Search</Link></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   
  




    

</div>






    


      
  );
}



export default Header;
