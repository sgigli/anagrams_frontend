import { Button } from 'react-bootstrap'
import '../../styles/App.scss'
import { logout } from '../../api/auth'
import { withRouter } from 'react-router-dom'

const Logout = ({ user, clearUser, history }) => {

  const onLogout = () => {
    logout(user)
      .then(() => clearUser())
      .then(() => history.push("/"))
  }

  return <Button onClick={onLogout}>Logout</Button>
}

export default withRouter(Logout)