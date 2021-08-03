import { Component } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Button>Sign Up</Button>
            <Button className="ms-2">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar