import React from 'react'
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import '../../styles/App.scss'
import { login } from '../../api/auth'
import { withRouter } from 'react-router-dom'
import messages from '../Alerts/messages'

class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onLogin = event => {
    event.preventDefault()

    const { setUser, history, setMsgAlert } = this.props

    login(this.state)
      .then((res) => setUser(res.data.user))
      .then(() => {
        setMsgAlert({
          heading: "Sign In Success!",
          message: messages.signInSuccess,
          variant: "success"
        })
      })
      .then(() => history.push("/"))
      .catch((error) => {
        setMsgAlert({
          heading: 'Sign In Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render() {
    const { username, password } = this.state

    return (
      <div className="fill-remaining-viewport-after-header d-flex align-items-center justify-content-center">
        <Form className="bg-warning w-50 p-5" onSubmit={this.onLogin}>
          <Form.Label><h2>Login</h2></Form.Label>
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
          <Button className="mt-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(Login)