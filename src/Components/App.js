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

  clearUser = () => this.setState({ user: null })

  render() {
    return (
      <Router>
        <Header user={this.state.user} clearUser={this.clearUser} />
        <main className="container">
          <Switch>
            <Route path='/sign_up' ><SignUp setUser={this.setUser} /></Route>
            <Route path='/login' ><Login setUser={this.setUser} /></Route>
          </Switch>
        </main>
      </Router>
    )
  }
}

export default App;
