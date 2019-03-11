import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import moxios from 'moxios';

import App from '../App';
import Root from '../../Root';
import LoginForm from './LoginForm';
import Public from '../../screens/Public/Public';
import Login from '../../screens/Login/Login';

let wrapper;

describe('LoginForm', () => {

  beforeEach(() => {
    wrapper = mount(
      <Root>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Root>
    );
  })

  afterEach(() => {
    wrapper.unmount();
  })
  
  it('should render without an error', () => {
    expect(wrapper.find('form').exists()).toEqual(true);
  });

  it('should contain two input fields', () => {
    expect(wrapper.find('input').length).toEqual(2);
  });

});

// describe('LoginForm success', () => {
//   beforeEach(() => {
//     moxios.install();
//     moxios.stubRequest('http://localhost:3030/auth/login', {
//       status:200,
//       response: {
//         firstName: 'Approved',
//         lastName: 'User'
//       }
//     })

//     wrapper = mount(
//       <Root>
//         <MemoryRouter initialEntries={['/login']}>
//           <Public />
//         </MemoryRouter>
//       </Root>
//     );

//   })

//   afterEach(() => {
//     moxios.uninstall();
//     wrapper.unmount();
//   });

//   it('should change route on successful login', () => {
//     // console.log(wrapper.find('input').length)
//     const loginForm = wrapper.find(LoginForm);
//     console.log(loginForm.find('#email').length);

//     loginForm.find('#email').simulate('change', { target: { value: 'approved@user.com' } });
//     loginForm.find('#password').simulate('change', { target: { value: 'correctpassword' } });
//     wrapper.update();
//     console.log(loginForm.find('#password').prop('value'));
//     // expect(loginForm.find('#email').prop('value')).toEqual('approved@user.com')
//     // expect(loginForm.find('#password').prop('value')).toEqual('correctpassword')
//     // loginForm.find('form').simulate('submit');
//     // loginForm.update();
//   })

// });
