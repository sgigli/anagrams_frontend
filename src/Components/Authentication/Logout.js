import { Button } from 'react-bootstrap'
import '../../styles/App.scss'
import { logout } from '../../api/auth'
import { withRouter } from 'react-router-dom'
import messages from '../Alerts/messages'

const Logout = ({ user, clearUser, setMsgAlert, history }) => {

  const onLogout = () => {
    logout(user)
      .then(() => clearUser())
      .then(() => {
        setMsgAlert({
          heading: "Logout success!",
          message: messages.logoutSuccess,
          variant: "success"
        })
      })
      .then(() => history.push("/"))
  }

  return <Button onClick={onLogout}>Logout</Button>
}

export default withRouter(Logout)