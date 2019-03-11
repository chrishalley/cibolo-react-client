import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import moxios from 'moxios';
import jwt from 'jsonwebtoken';

import api from '../../apis/api'
import { changeAuth } from '../index';
import { CHANGE_AUTH } from '../types';

// Mock data
const mockData = {
  authResponse: {
    data: {
      firstName: 'Approved',
      lastName: 'User'
    },
    headers: {
      'x-token': jwt.sign({ id: 12345, access: 'super-admin' }, 'asdfghjkl', { expiresIn: '24hr' }),
      'x-refresh-token': jwt.sign({ id: 12345, access: 'super-admin' }, 'asdfghjkl', { expiresIn: '24hr' })
    }
    
    // status: true,
    // message: 'You have successfully signed up',
    // data: {
    //   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTM5MzkzMDIsImN1cnJlbnRVc2VyIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJydWtraWV5In0sImlhdCI6MTUxMzg1MjkwMn0.K2P7BAKDkMbk9avQznEE4u8PRtrx3P0mlSzLvFAdH2E'
    // }
  },
  loginData: {
    // username: 'ruqoyah',
    // fullName: 'Rukayat Odukoya',
    email: 'approved@user.com',
    password: 'validpassword'
  }
}

// Mock Redux Store
const middlewares = [reduxThunk];
const mockStore = configureMockStore(middlewares);

// Mock Local Storage
let localStorage = {};

const setItem = (key, value) => {
  return Object.assign(localStorage, { [key]: value });
}

window.localStorage = setItem;

describe('auth actions', () => {

  beforeEach(() => moxios.install(api));
  afterEach(() => moxios.uninstall(api));

  it('creates CHANGE_AUTH action when signup is successful', async (done) => {
    const { authResponse, loginData } = mockData;

    moxios.stubRequest('http://localhost:3030/auth/login', {
      status: 200,
      response: authResponse.data,
      headers: authResponse.headers
    });

    console.log(authResponse.headers['x-token']);

    const { exp } = jwt.decode(authResponse.headers['x-token']);
    console.log(exp);

    const expectedActions = [
      { 
        type: CHANGE_AUTH,
        payload: {...authResponse.data, tokenExpiry: exp * 1000 }
      }
    ];

    const store = mockStore({});

    await store.dispatch(changeAuth(loginData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
      done();
  });
});

