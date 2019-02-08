import { CHANGE_AUTH } from './types';
import api from '../apis/api'

export const changeAuth = () => (dispatch) => {

  api.get('/posts')
    .then(response => {
      dispatch({ type: CHANGE_AUTH, payload: response.data })
    })
    .catch(e => {
      console.log(e)
    })
}