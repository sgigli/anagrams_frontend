import { Component } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Authentication/SignUp'
import Login from './Authentication/Login'
import MessageAlert from './Alerts/MessageAlert'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  setMsgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render() {
    const { user, msgAlerts } = this.state

    return (
      <Router>
        <Header user={user} clearUser={this.clearUser} setMsgAlert ={this.setMsgAlert} />
        {msgAlerts.map((msgAlert, index) => (
          <MessageAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Switch>
            <Route path='/sign_up' ><SignUp setUser={this.setUser} setMsgAlert={this.setMsgAlert} /></Route>
            <Route path='/login' ><Login setUser={this.setUser} setMsgAlert={this.setMsgAlert} /></Route>
          </Switch>
        </main>
      </Router>
    )
  }
}

export default App;
