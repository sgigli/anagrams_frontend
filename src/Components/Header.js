import { Fragment } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logout from './Authentication/Logout'

const Header = ({ user, clearUser, setMsgAlert }) => {

  const authenticatedOptions = (
    <Fragment>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav>
      { user && <span className="me-3">Welcome, {user.username}</span>}
      <Logout user={user} clearUser={clearUser} setMsgAlert={setMsgAlert} />
    </Fragment>
  )

  const unauthenticatedOptions = (
    <Fragment>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav>
      <Button as={Link} to="/sign_up">Sign Up</Button>
      <Button as={Link} to="/login" className="ms-2">Login</Button>
    </Fragment>
  )

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Anagrammania</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header