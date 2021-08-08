import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = credentials => {
  console.log(credentials)
  console.log(apiUrl)

  return axios({
    method: 'POST',
    url: apiUrl + '/sign_up',
    data: {
      email: credentials.email,
      username: credentials.username,
      password: credentials.password
    }
  })
}