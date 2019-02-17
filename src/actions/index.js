import { CHANGE_AUTH } from './types';
import api from '../apis/api'

// export const changeAuth = ({ email, password }) => dispatch => {
//   console.log('email: ', email)
//   console.log('password: ', password)
//   return new Promise((resolve, reject) => {
//     api.post('/auth/login', { email, password })
//       .then(res => {
//         console.log('changeAuth() action')
//         dispatch({ type: CHANGE_AUTH, payload: res.data })
//         resolve(res.data)
//       })
//       .catch(e => {
//         reject(e)
//       })
//   })

// }

export const changeAuth = (payload) => {
  return {
    type: CHANGE_AUTH,
    payload: payload
  }
}

export const logout = () => {
  return {
    type: CHANGE_AUTH,
    payload: null
  }
}