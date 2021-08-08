import { Component } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Anagrammania</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav>
            <Button as={Link} to="/sign_up">Sign Up</Button>
            <Button as={Link} to="/login" className="ms-2">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Header