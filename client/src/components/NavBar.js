import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Carry Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Gestational Carrier</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Intended Parent
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Journey Log
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Appointment Summary
            </Nav.Link>
          </Nav>         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;