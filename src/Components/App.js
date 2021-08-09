import { Component } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Authentication/SignUp'
import Login from './Authentication/Login'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null
    }
  }

  setUser = user => this.setState({ user })

  render() {
    return (
      <Router>
        <Header user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path='/sign_up' ><SignUp /></Route>
            <Route path='/login' ><Login setUser={this.setUser} /></Route>
          </Switch>
        </main>
      </Router>
    )
  }
}

export default App;
