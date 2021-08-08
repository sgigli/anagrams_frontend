import { Component } from 'react'
import Header from './Header'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null
    }
  }

  render() {
    return (
      <Router>
        <Header user={this.state.user}/>
        <main className="container">
          <Routes />
        </main>
      </Router>
    )
  }
}

export default App;
