import { CHANGE_AUTH } from './types';
import api from '../apis/api'

export const changeAuth = ({ email, password }) => (dispatch) => {

  api.post('/auth/login', { email, password })
    .then(res => {
      dispatch({ type: CHANGE_AUTH, payload: res.data })
    })
    .catch(e => {
      console.log(e)
    })
}