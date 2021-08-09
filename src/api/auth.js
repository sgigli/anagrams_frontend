import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = credentials => {
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

export const login = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/login',
    data: {
      username: credentials.username,
      password: credentials.password
    }
  })
}

export const logout = credentials => {
  return axios({
    method: 'GET',
    url: apiUrl + '/logout',
    data: {
      username: credentials.username,
      password: credentials.password
    }
  })
}