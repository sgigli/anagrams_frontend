import React from 'react'
import Form from "react-bootstrap/Form"

class SignUp extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Control type="password" placeholder="Enter password" />
          <Form.Control type="password" placeholder="Confirm password" />
        </Form.Group>
      </Form>
    )
  }
}

export default SignUp