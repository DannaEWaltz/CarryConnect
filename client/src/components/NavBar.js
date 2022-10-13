import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">CarryConnect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="LogIn" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>      
              <NavDropdown.Item href="#action/3.1">Gestational Carrier</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Intended Parent</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Test Result</NavDropdown.Item>              
              <NavDropdown.Item href="#action/3.4">Journey Log</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Appointment Summary</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Milestone</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Medication</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/signup">SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;