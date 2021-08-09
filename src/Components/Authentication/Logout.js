import { Button } from 'react-bootstrap'
import '../../styles/App.scss'
import { logout } from '../../api/auth'

const Logout = ({ user, clearUser, test }) => {

  const onLogout = () => {
    logout(user)
      .then(() => clearUser())
  }

  return <Button onClick={onLogout}>Logout</Button>
}

export default Logout