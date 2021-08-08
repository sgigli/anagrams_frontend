import NavBar from './Components/NavBar'
import Routes from './Components/Routes'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <main className="container">
        <Routes />
      </main>
    </Router>
  )
}

export default App;
