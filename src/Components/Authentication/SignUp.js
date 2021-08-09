import React from 'react'
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import '../../styles/App.scss'
import { signUp } from '../../api/auth'
import { withRouter } from 'react-router-dom'

class SignUp extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { history } = this.props

    signUp(this.state)
      .then(() => console.log("Success!"))
      .then(() => history.push("/"))
      .catch((error) => console.log(error))
  }

  render() {
    const { email, username, password, passwordConfirmation } = this.state

    return (
      <div className="fill-remaining-viewport-after-header d-flex align-items-center justify-content-center">
        <Form className="bg-warning w-50 p-5" onSubmit={this.onSignUp}>
          <Form.Group controlId="email">
            <Form.Label><h2>Sign Up</h2></Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Enter email"
              value = {email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Control
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter username"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="passwordConfirmation">
            <Form.Control
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button className="mt-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(SignUp)