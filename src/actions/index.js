import { CHANGE_AUTH } from './types';
import api from '../apis/api'

export const changeAuth = ({ email, password }, callback) => (dispatch) => {

  api.post('/auth/login', { email, password })
    .then(res => {
      dispatch({ type: CHANGE_AUTH, payload: res.data })
    })
    .catch(e => {
      callback(e.message)
    })
}