import NavBar from './Components/NavBar'
import Routes from './Components/Routes'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  )
}

export default App;
